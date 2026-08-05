# 🔍 Auditoria Técnica e Plano de Ação — `ruanvalente-portfolio`

> Auditoria realizada em 04/08/2026. Nenhuma alteração foi feita no código — apenas leitura e comandos read-only.
> **Stack:** Next.js 15.2.9 (App Router + Pages Router), React 19.2.8, TypeScript 5.9 (strict), Tailwind 3.4, shadcn/ui (Radix), framer-motion 12, next-themes, yarn 1.22.

---

## Visão geral

**Destaques que moldam o diagnóstico:**

- O `pages/` ativou o Pages Router por engano — existe uma rota real **`/home`** (confirmado em `.next/routes-manifest.json`).
- A página inteira é um Client Component (`pages/home.tsx` → `"use client"`), fazendo com que **conteúdo estático** seja renderizado no cliente.
- `next lint` está **quebrado** (ESLint não instalado; pede configuração interativa e falha em CI).
- ~45 arquivos mortos (componentes, hooks, CSS, dependências).

---

## 🔴 Prioridade Alta

### A1. `pages/` usado como container — rota `/home` fantasma e routers misturados
- **Problema:** `pages/home.tsx` (1º arquivo = `"use client"`) é usado apenas como componente importado por `app/page.tsx:3`, mas a pasta `pages/` ativa o Pages Router no Next.js, gerando a rota pública não intencional `/home`.
- **Evidência:** `.next/routes-manifest.json` → `staticRoutes: [{page:'/home'}]`; `app/page.tsx:1-4`.
- **Impacto:** conteúdo duplicado/indexável em `/home`, split de bundle desnecessário, confusão de arquitetura (2 routers ativos).
- **Solução:** mover `pages/home.tsx` para `components/home/home-page.tsx` (ou `app/(home)/...`) e remover a pasta `pages/` por completo.
- **Benefício:** elimina rota fantasma, reduz bundle, padroniza no App Router.
- **Complexidade:** Baixa.

### A2. Conteúdo estático 100% Client Component — JS pesado na carga inicial
- **Problema:** `pages/home.tsx` é `"use client"`; todas as 8 seções (hero, about, skills, experiência, projetos, etc.) são Client Components, várias importando `framer-motion` e Radix. Cada seção é ainda `next/dynamic` (em `routes/routes.tsx`), gerando **waterfall de 8 chunks** no primeiro carregamento.
- **Evidência:** `pages/home.tsx:1`; `routes/routes.tsx:11-89`; bundle atual: rota `/` carrega ~560 KB de chunks da rota + framework (190 KB) + main (119 KB) + polyfills (112 KB) ≈ **1 MB bruto** (chunk `970-*.js` = 126 KB contém framer-motion; `101-*.js` = 71 KB contém Radix).
- **Impacto:** LCP/TBT altos num site que deveria ser quase estático; sem benefício real de SPA para conteúdo imutável.
- **Solução:** converter seções estáticas (Hero, About, Skills, Experience, Projects, Challenges, Contact) em **Server Components**, mantendo apenas os "ilhas" interativas (Testimonials, Tabs de filtro, Header) como client. Remover `next/dynamic`/`Suspense`/`AnimatedLoader` da home.
- **Benefício:** elimina framer-motion/Radix do bundle inicial ou quase; JS inicial cai para fração do atual; melhora LCP e SEO.
- **Complexidade:** Média (refatoração estrutural — ver R1).

### A3. `typescript.ignoreBuildErrors` e `eslint.ignoreDuringBuilds` = `true`
- **Problema:** o build **não falha** com erros de TS ou lint (`next.config.mjs:10-15`). Atualmente `tsc --noEmit` passa (boa notícia), mas a configuração silencia qualquer regressão futura.
- **Impacto:** risco de deploy de código quebrado/inseguro sem CI para pegar; falsa sensação de segurança.
- **Solução:** remover ambos; instalar `eslint` + `eslint-config-next` e fazer o build checar de verdade.
- **Benefício:** tipo e lint viram barreira de qualidade real no deploy.
- **Complexidade:** Baixa.

### A4. Rotas criadas por `app/page.tsx` sem `loading.tsx`, `error.tsx`, `not-found.tsx` e sem segmentos
- **Problema:** o App Router é usado no mínimo absoluto (`app/layout.tsx` + `app/page.tsx`). Sem UI de loading/erro/404, sem `sitemap.ts`/`robots.ts`, sem metadata por segmento.
- **Evidência:** árvore de `app/` contém só `globals.css`, `layout.tsx`, `page.tsx`.
- **Impacto:** UX ruim em falhas, SEO incompleto, e a estratégia de renderização não é aproveitada (sem SSG/ISR/cache efetivos — a home client anula parte do benefício).
- **Solução:** adicionar `app/loading.tsx`, `app/error.tsx`, `app/not-found.tsx`; `app/sitemap.ts` e `app/robots.ts`; converter seções em RSC (R1).
- **Benefício:** resiliência, SEO, performance.
- **Complexidade:** Baixa–Média.

### A5. `next lint` quebrado e sem lint/format configurados
- **Problema:** `eslint` não está nas devDependencies (`package.json:68-75`) e `next lint` nem existe mais no Next 15.2.9 — rodar `yarn lint` abre prompt interativo "How would you like to configure ESLint?" e falha com exit 1.
- **Evidência:** saída real do comando; script `lint` em `package.json:13`.
- **Impacto:** zero garantia de qualidade estática; inconsistências se acumulam.
- **Solução:** instalar `eslint`, `eslint-config-next`, `@typescript-eslint/*` (ou migrar para ESLint flat config) + Prettier; trocar script para `eslint . --max-warnings=0`.
- **Benefício:** lint efetivo, prevenção de erros, DX.
- **Complexidade:** Baixa.

### A6. Deps e componentes mortos inflando o projeto
- **Problema:** ~42 arquivos `components/ui/*` não são importados por nada (e.g., `calendar`, `chart`, `carousel`, `command`, `drawer`, `form`, `input-otp`, `resizable`, `sidebar`, `sonner`, `table`, `toast`, `toaster`…), junto de hooks mortos (`hooks/use-toast.ts`, `hooks/use-mobile.tsx`, `hooks/use-local-storage.ts`, `components/ui/use-toast.ts`, `components/ui/use-mobile.tsx` — estes dois últimos duplicatas idênticas) e `styles/globals.css` não referenciado.
- **Evidência:** varredura de imports (nenhum arquivo fora de `components/ui` referencia os citados); `styles/globals.css` não é importado em `app/layout.tsx:12` (importa `./globals.css`).
- **Impacto:** dependências com bundlers pesados (`recharts`, `react-day-picker`, `embla-carousel-react`, `cmdk`, `vaul`, `input-otp`, `react-resizable-panels`, `sonner`, `react-hook-form`) e ~20 pacotes Radix instalados sem uso; manutenção/onboarding confusos.
- **Solução:** remover arquivos mortos + dependências não usadas (ver D2). Usar `npx knip` ou `depcheck` para conferir.
- **Benefício:** menos superfície de vulnerabilidade, build mais rápido, package.json enxuto.
- **Complexidade:** Baixa (com cuidado para não remover o que está em uso transitivo: `tooltip`, `sheet`, `tabs`, `card`, `badge`, `button`, `dropdown-menu`).

---

## 🟡 Prioridade Média

### M1. Providers duplicados (Language + Tooltip)
- **Problema:** `LanguageProvider` e `TooltipProvider` são enrolados duas vezes: em `app/layout.tsx:92-98` **e** novamente em `pages/home.tsx:16-33`. Dois providers de linguagem com estados independentes (Header/Footer usam o externo; as seções usam o interno).
- **Impacto:** estado de idioma divergente entre header e seções; re-render desnecessário; confusão (os commits recentes `fix/home-language-provider` e `fix/home-tooltip-provider` remendaram isso).
- **Solução:** manter um único provider no `layout.tsx` e remover os wrappers de `pages/home.tsx` (ou mover tudo para um único arquivo de página server que renderiza os client sections).
- **Benefício:** estado único, menos re-render, código mais claro.
- **Complexidade:** Baixa.

### M2. i18n com flash de idioma + `html lang="en"` fixo
- **Problema:** `LanguageContext` lê `localStorage` só em `useEffect` (`context/language-context.tsx:28-36`) → usuário pt-BR vê conteúdo em inglês até hidratar. O `lang` da página é fixo (`app/layout.tsx:83`).
- **Impacto:** acessibilidade (idioma anunciado errado), SEO, UX com flash de conteúdo.
- **Solução:** persistir preferência em **cookie** e inicializar o estado no servidor; sincronizar `<html lang>` com o idioma (via `useEffect` no layout client ou cookie no RSC).
- **Benefício:** primeira pintura já no idioma correto, acessível, indexável.
- **Complexidade:** Média.

### M3. Dupla tradução (t(t(x))) e inconsistência de dados
- **Problema:** em `experiences-section.tsx:7-22` traduz-se e passa-se o texto, mas `ExperienceCard` traduz de novo (`components/shared/experience-card.tsx:31,34,36,39`). Em `projects-section.tsx:43` a description já é traduzida e `project-card.tsx:67` traduz de novo; já o título é traduzido apenas dentro do card. `config.ts` ainda tem `description` **e** `descriptionKey` (campos redundantes; `description` dos PROJECTS nunca é usado).
- **Impacto:** lógica confusa, risco de chave colidir com texto traduzido, manutenção difícil.
- **Solução:** padronizar: traduzir uma única vez na seção (ou no card); remover campos mortos (`PROJECTS[].description`, `EXPERIENCES[].isCurrent`).
- **Benefício:** menos bugs, código limpo.
- **Complexidade:** Baixa.

### M4. `ExperienceCard` ignora `isLast` → linha da timeline extrapola
- **Problema:** `experiences-section.tsx` nunca passa `isLast`, e os flags `isCurrent`/`isLast` de `constants/config.ts:33-96` não são usados. O card do último item desenha a linha vertical (`components/shared/experience-card.tsx:24-26`) que desce além do fim.
- **Impacto:** bug visual pequeno e dados mortos.
- **Solução:** passar `isLast={experience.isLast}` (ou index) e remover `isCurrent`.
- **Benefício:** correção visual + limpeza.
- **Complexidade:** Baixa.

### M5. Framer-motion em toda parte
- **Problema:** animações `motion.*`/`useInView` em praticamente todas as seções (`animated-section.tsx`, `project-card.tsx`, `testimonials-section.tsx`, `hero…`). `AnimatedSection` é redundante com `whileInView` interno de testes/projetos. `scroll-indicator.tsx` e `animated-tabs.tsx` estão mortos (junto com `AnimatedLoader` usado como fallback).
- **Impacto:** ~126 KB de JS para animações decorativas num portfólio; TBT afetado.
- **Solução:** manter framer-motion só onde há valor real (testimonials, hovers) e usar animações CSS (Tailwind `animate-*`/`transition`) para o resto; remover componentes mortos.
- **Benefício:** bundle menor, menos re-render, código mais simples.
- **Complexidade:** Média.

### M6. Imagens sem otimização
- **Problema:** `images.unoptimized: true` (`next.config.mjs:16-18`) desativa o Image Optimization para todas as imagens. A foto do hero vem do `avatars.githubusercontent.com` com `quality={100}` e sem `sizes` (`components/shared/hero-section.tsx:65-72`); `public/` tem `favicon.png` (1,17 MB!) e `icon0.svg` (1,57 MB).
- **Impacto:** payload maior e sem redimensionamento/formato moderno (AVIF/WebP).
- **Solução:** remover `unoptimized`, configurar `images.remotePatterns` para o avatar do GitHub, ajustar `quality`/`sizes`, e otimizar/remover os PNGs de 1 MB+.
- **Benefício:** economiza centenas de KB na carga.
- **Complexidade:** Baixa–Média.

### M7. Acessibilidade de controles
- **Problema:** botões só-ícone sem nome acessível: menu mobile (`components/shared/header.tsx:79` — `<Menu>`), `BackToTopButton` (`components/ui/back-to-top-button.tsx:27` — `<ArrowUp>`), setas do carousel e dots (`components/shared/testimonials-section.tsx:167-207`, sem `aria-label`/`aria-current`); emojis ✅📚 em `about-section.tsx:51-73` sem `aria-hidden`.
- **Impacto:** WCAG 2.2 — falha 2.4.4/2.4.7 (nomes de link/controle) e 1.1.1; leitores de tela anunciam emojis.
- **Solução:** adicionar `aria-label`/`sr-only`, `aria-hidden` em emojis decorativos, `aria-current` nos dots; considerar desativar autoplay por default (`prefers-reduced-motion`).
- **Benefício:** conformidade acessível.
- **Complexidade:** Baixa.

### M8. Contraste das cores âmbar
- **Problema:** `text-amber-600` (#d97706) sobre fundo claro (~3,0:1) em títulos/links (`about-section.tsx:16`, `project-card.tsx:54`, `experience-card.tsx:33`, etc.) — abaixo de 4,5:1 exigido por WCAG AA.
- **Impacto:** leitura difícil para textos normais.
- **Solução:** usar `amber-700`/`amber-800` no light mode (mantendo `yellow-400` no dark), e validar com axe.
- **Benefício:** conformidade e legibilidade.
- **Complexidade:** Baixa.

---

## 🟢 Prioridade Baixa

### B1. `next.config.mjs` com resíduo de código v0
- **Problema:** import de `./v0-user-next.config` que não existe (`next.config.mjs:3`), função `mergeConfig` com mutação, flags `experimental` que já são padrão (`webpackBuildWorker`, `parallelServerBuildTraces`, `parallelServerCompiles`).
- **Solução:** simplificar o arquivo para o mínimo (`images.remotePatterns` + nada mais).
- **Complexidade:** Baixa.

### B2. Duplicação de diretórios e tipos
- **Problema:** `lib/utils.ts` vs `utils/getResume.ts` (dois diretórios `utils`); tipo `Language` duplicado (`types/index.ts:1` e inline em `context/language-context.tsx:13`); `hooks/` e `components/ui/` com `use-mobile`/`use-toast` idênticos; `allowJs: true` desnecessário no `tsconfig.json:4`.
- **Solução:** unificar em `lib/`, consolidar tipos em `types/index.ts`, remover duplicatas.
- **Complexidade:** Baixa.

### B3. Dados mortos / inconsistentes
- **Problema:** `avatar: "/placeholder.svg?height=60&width=60"` nos testimonials (`testimonials-section.tsx:33-65`) nunca usado (renderizam iniciais); `ICON_MAP` com ícones sem uso (`techbadge.tsx:43-57` — NestJS, Prisma, MongoDB, Docker, Git, Jest); typo `tecnologies` (`config.ts:20`); `@type` de `ExperienceCard` com `isLast` inútil.
- **Solução:** remover/limpar.
- **Complexidade:** Baixa.

### B4. Manifest quebrado e metadados incompletos
- **Problema:** `public/manifest.json` aponta para `/public/favicon/web-app-manifest-192x192.png` (não existe; pasta `public/favicon` ausente) e usa `theme_color: #ffffff` fixo. Sem `viewport`/`themeColor` dinâmico, sem JSON-LD.
- **Solução:** corrigir caminhos/icons; adicionar `viewport` + `themeColor` com `colorScheme`, e JSON-LD `Person`.
- **Complexidade:** Baixa.

### B5. Padrões de estilo duplicados em `<a>` no lugar de `<Button>`
- **Problema:** CTAs/resume do header (`header.tsx:64-73,87-96`) e hero (`hero-section.tsx:26-36`) são `<a>` com strings gigantes de classe copiadas do `Button`, duplicadas em desktop/mobile.
- **Solução:** usar `<Button asChild>` (já existe `buttonVariants`) e extrair classes comuns.
- **Complexidade:** Baixa.

### B6. `.DS_Store` versionado e README desatualizado
- **Problema:** `components/.DS_Store` está no git; README manda usar `npm install` (o projeto usa yarn via `packageManager`), e a estrutura documentada não bate com a real.
- **Solução:** `git rm`, adicionar ao `.gitignore`, corrigir README.
- **Complexidade:** Baixa.

### B7. Pinning inconsistente de versões
- **Problema:** algumas deps exatas (`date-fns: "4.4.0"`, `cmdk: "1.1.1"`, `embla-carousel-react: "8.6.0"`, etc.) e outras com `^` (Radix, framer-motion, next) no mesmo `package.json`.
- **Solução:** padronizar com `^` ou usar `yarn resolutions`/Renovate.
- **Complexidade:** Baixa.

---

## ⚡ Quick Wins (≤ 30 min cada)

1. **Remover os flags do `next.config.mjs`** que desativam checagens (A3) — 5 min.
2. **Deletar arquivos mortos** de `components/ui/*`, hooks duplicados e `styles/globals.css` (A6) — 15 min.
3. **Apagar a pasta `pages/`** movendo `home.tsx` para `components/` (A1) — 10 min.
4. **Remover wrappers duplicados** de `LanguageProvider`/`TooltipProvider` em `pages/home.tsx` (M1) — 5 min.
5. **`aria-label`/`sr-only`** nos botões de ícone e dots do carousel (M7) — 15 min.
6. **Corrigir o contraste** `amber-600 → amber-700` no light mode (M8) — 15 min.
7. **Passar `isLast`** para o `ExperienceCard` e remover `isCurrent` (M4) — 5 min.
8. **Corrigir `manifest.json`** (caminhos de ícones) (B4) — 10 min.
9. **`git rm components/.DS_Store` + `.gitignore`** (B6) — 2 min.
10. **Remover imports/`dynamic()` não usados** e `v0-user-next.config` (B1) — 10 min.

---

## 🔧 Refatorações sugeridas

### R1. Home = Server Component com ilhas client (a maior vitória)

**Hoje** (`pages/home.tsx`): tudo client, tudo `next/dynamic`, 8 chunks, framer em cada seção.

```tsx
// app/page.tsx  (Server Component — sem "use client")
import { HeroSection } from "@/components/sections/hero-section";
import { AboutSection } from "@/components/sections/about-section";
import { SkillsSection } from "@/components/sections/skills-section";
import { ExperiencesSection } from "@/components/sections/experiences-section";
import { ProjectsSection } from "@/components/sections/projects-section"; // ilha client (tabs)
import { ChallengesSection } from "@/components/sections/challenges-section";
import { ContactSection } from "@/components/sections/contact-section";
import { TestimonialsSection } from "@/components/sections/testimonials-section"; // ilha client

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ExperiencesSection />
      <ProjectsSection />
      <ChallengesSection />
      <ContactSection />
      <TestimonialsSection />
    </>
  );
}
```

- **Por quê é superior:** cada seção estática deixa de enviar JS (framer-motion/Radix saem do bundle inicial); o Next pré-renderiza tudo para HTML estático (SSG) com cache efetivo; o Suspense/`AnimatedLoader`/`SectionLoader` e o `routes/routes.tsx` desaparecem. As únicas ilhas client ficam onde há interação real (tabs, carousel, header). Exige que as seções recebam o idioma do servidor (ver R2).
- **Impacto:** bundle inicial cai de ~1 MB bruto para algo da ordem de 100–200 KB; LCP e TBT melhoram drasticamente.

### R2. i18n lendo cookie no servidor + `<html lang>` dinâmico

```tsx
// lib/i18n.ts (RSC-friendly)
export type Language = "en" | "pt-BR";
export const getLanguage = (cookie?: string): Language =>
  cookie === "pt-BR" ? "pt-BR" : "en";

// app/layout.tsx (Server Component)
import { cookies } from "next/headers";
const lang = getLanguage(cookies().get("language")?.value);
// <html lang={lang}> + injeta preferência via prop no ThemeProvider
```

- **Por quê é superior:** elimina o flash de inglês (M2) e o estado duplicado dos dois providers (M1); o `lang` fica correto no HTML servido; o estado client só persiste o toggle.

### R3. Consolidar a dupla tradução

**Hoje:** seção traduz → card traduz de novo (`experiences-section.tsx:7-22` + `experience-card.tsx:31-39`). **Proposto:** passar chaves `experienceKey` e traduzir uma única vez no card, ou traduzir só na seção e parar de chamar `t()` no card. Escolher UMA convenção e aplicar em `experience-card`, `project-card` e `skill-card`.

---

## 📊 Resumo — Notas (0–10)

| Critério | Nota | Justificativa rápida |
|---|---|---|
| **Arquitetura geral** | **5.5** | Router misturado (rota `/home`), providers duplicados, mas estrutura de pastas razoável |
| **Performance** | **5.5** | ~1 MB de JS inicial para site estático; sem otimização de imagem; código-splitting ineficaz |
| **Segurança** | **7.0** | Superfície mínima (sem forms/env/secrets); `ignoreBuildErrors` e `ignoreDuringBuilds` são o risco real |
| **Componentização** | **5.5** | Boas seções modulares, mas ~45 arquivos mortos e padrões de CTA/Button duplicados |
| **Organização** | **5.0** | `pages/` como container, `utils/` vs `lib/`, hooks duplicados, `styles/globals.css` morto |
| **Qualidade do código** | **5.5** | TS strict limpo, mas sem lint/format/CI e dupla tradução |
| **Escalabilidade** | **4.5** | Sem RSC/SSG/ISR aproveitados; tudo client limita o crescimento |
| **Manutenibilidade** | **5.0** | Dead code massivo, comandos quebrados, README desatualizado |

**Nota geral: 5.4/10** — base sólida e visualmente rica, mas com dívida técnica de "scaffold copiado" (shadcn completo + v0 remnants) e escolhas de arquitetura que contrariam o que o Next.js 15 App Router oferece.

---

## 🗺️ Roadmap sugerido (max. retorno × min. esforço)

| Fase | O quê | Esforço | Impacto | Status |
|---|---|---|---|---|
| **1 — Higiene (0,5–1 dia)** | A3, A5, A6, B1, B2, B3, B6, B7: config segura, lint funcional, dead code/deps removidos, README | Baixo | Remove risco e dívida | ✅ **Concluída** |
| **2 — Correções rápidas (0,5 dia)** | A1 (mover `pages/`), M1, M4, M7, M8, B4 | Baixo | Rota fantasma, a11y, contraste, providers | ✅ **Concluída** |
| **3 — Refatoração de renderização (2–3 dias)** | R1 + R2 (Server Components + i18n por cookie) | Médio | O maior ganho de performance/arquitetura | ✅ **Concluída** |
| **4 — Qualidade (1–2 dias)** | Testes (Vitest + React Testing Library) nas ilhas client, CI no GitHub Actions (lint + tsc + build + testes), `sitemap.ts`/`robots.ts` | Médio | Sustentabilidade | ✅ **Concluída** |
| **5 — Acessibilidade/SEO finos (1 dia)** | Auditoria axe, `prefers-reduced-motion`, JSON-LD, `viewport`/`themeColor` dinâmicos | Baixo–Médio | Conformidade e indexação | ✅ **Concluída** |

---

## ✅ Execução — Progresso

> Registro de execução das fases do roadmap. Cada fase atualiza este documento ao ser concluída.

### Fase 1 — Higiene ✅ (concluída em 04/08/2026)

**Objetivo:** config segura, lint funcional, dead code/deps removidos, README atualizado.

| Item | Ação executada | Resultado |
|---|---|---|
| **A3** — flags de checagem | Removidos `typescript.ignoreBuildErrors` e `eslint.ignoreDuringBuilds` do `next.config.mjs` | Build agora **falha** com erros de tipo/lint reais |
| **A5** — ESLint | Instalados `eslint@9.39.5`, `eslint-config-next@15.2.9`, `@eslint/eslintrc`, `eslint-config-prettier`, `prettier@3.9.6`. Criado `eslint.config.mjs` (flat config) e `.prettierrc.json`/`.prettierignore`. Script `lint` → `eslint . --max-warnings=0`; scripts `format`/`format:check` adicionados | `yarn lint` passa com 0 erros (2 erros corrigidos: `react/no-unescaped-entities` nos quotes dos testimonials e `@typescript-eslint/no-require-imports` no `tailwind.config.ts` — trocado `require()` por `import`) |
| **A6** — dead code/deps | Removidos **43** arquivos `components/ui/*` mortos (accordion, calendar, carousel, chart, command, drawer, form, input-otp, resizable, sidebar, sonner, table, toast/toaster, use-mobile, use-toast…), hooks `hooks/use-{toast,mobile,local-storage}.ts`, `styles/globals.css`, componentes `animated-tabs`/`scroll-indicator`, assets `public/` não referenciados (`favicon.png` 1,17 MB, `icon0.svg` 1,57 MB, placeholders) | `components/ui/` reduzido para 10 arquivos em uso; remoção de ~2,8 MB de assets |
| **B1** — `next.config.mjs` | Arquivo reescrito do zero: removeu import `./v0-user-next.config`, `mergeConfig` mutável, `experimental.*` obsoletos, `images.unoptimized` | Config mínima: `images.remotePatterns` para o avatar do GitHub (ativa otimização de imagem) |
| **B2** — duplicação de dirs/tipos | `utils/getResume.ts` → `lib/getResume.ts` (imports atualizados em `header.tsx`); tipo `Language` consolidado em `types/index.ts` (importado por `language-context`); `allowJs: true` removido | Diretório `utils/` eliminado |
| **B3** — dados mortos | Typo `tecnologies` → `technologies` (config + usos); campo `isCurrent` removido dos EXPERIENCES; ícones não usados removidos do `ICON_MAP` (NestJS, Prisma, MongoDB, PostgreSQL, Jest, Git, Docker, TailwindCSS); campo `avatar` removido de Testimonial/dados | Sem dados mortos |
| **B6** — `.DS_Store`/README | `git rm components/.DS_Store`; `.DS_Store` adicionado ao `.gitignore`; README reescrito (yarn em vez de npm, estrutura real, scripts atuais) | Repo limpo, README fiel |
| **B7** — pinning | Todas as versões padronizadas com `^` (deps exatas `cmdk`, `date-fns`, `embla-carousel-react`, `input-otp`, `react-day-picker`, `react-resizable-panels`, `recharts`, `next` foram removidas ou convertidas) | `package.json` consistente |

**Dependências removidas (13):** `@hookform/resolvers`, `zod`, `date-fns`, `react-hook-form`, `recharts`, `react-day-picker`, `embla-carousel-react`, `cmdk`, `vaul`, `input-otp`, `react-resizable-panels`, `sonner` + **22** pacotes `@radix-ui/react-*` não usados (mantidos apenas `dialog`, `dropdown-menu`, `slot`, `tabs`, `tooltip`).

**Validação:** `yarn lint` ✅ · `yarn format:check` ✅ · `npx tsc --noEmit` ✅ · `yarn build` ✅ (route `/` = 176 kB First Load JS, sem regressão).

**Observações:**
- O Next 15.5 re-adiciona `allowJs: true` automaticamente ao tsconfig durante o build (comportamento do framework); manteve-se como o Next define para evitar conflito.
- `next` foi resolvido de `15.2.9` → `15.5.22` (range `^15.2.9`), já contendo os fixos de CVE. Build validado.
- Otimização de imagem reativada (M6 parcial): `quality={100}` → `80` + `sizes` no avatar do hero.

### Fase 2 — Correções rápidas ✅ (concluída em 04/08/2026)

**Objetivo:** eliminar rota fantasma, providers duplicados, bugs visuais e melhorar a11y/contraste/manifest.

| Item | Ação executada | Resultado |
|---|---|---|
| **A1** — `pages/` container | `pages/home.tsx` movido → `components/home/home-page.tsx` (export nomeado); `app/page.tsx` importa `{ HomePage }`; pasta `pages/` removida | **Rota `/home` eliminada** — build agora gera só `/` e `/_not-found`; Pages Router desativado |
| **M1** — providers duplicados | Removidos `LanguageProvider` + `TooltipProvider` de `home-page.tsx` (já existem no `layout.tsx`) | Estado de idioma único no app; menos re-render |
| **M4** — timeline extrapolando | `experiences-section.tsx` agora passa `isLast={index === EXPERIENCES.length - 1}`; campo morto `isLast` removido dos dados em `config.ts` (`isCurrent` já removido na Fase 1) | Linha vertical da timeline para no último card |
| **M7** — acessibilidade | `aria-label="Open menu"` no botão do menu mobile (header); `aria-label="Back to top"` no `BackToTopButton`; `aria-label` prev/next + `aria-current`/`aria-label` nos dots do carousel; `aria-hidden="true"` nos emojis decorativos ✅📚 do about | WCAG 2.4.4/2.4.7/1.1.1 cobertos nos controles sinalizados |
| **M8** — contraste âmbar | `text-amber-600` → `text-amber-700` no light mode (títulos, links, ícones) em todos os componentes; botões com texto branco (`bg-amber-600`) → `bg-amber-700` + hover `amber-800`; bordas de CTA → `amber-700`. Mantido `dark:text-yellow-400`. `amber-600` restante é decorativo (dots/bordas sem texto) | Contraste ≥ 4.5:1 em texto no light mode |
| **B4** — manifest quebrado | Gerados `public/favicon/web-app-manifest-{192,512}x{png}` via `sips` (a partir do `apple-icon.png`); `manifest.json` corrigido com os caminhos reais + typo `Enginner` → `Engineer`; `sizes` do ícone no metadata corrigido (32x32 → 96x96) | PWA manifest válido, sem caminhos 404 |

**Validação:** `yarn lint` ✅ · `yarn format:check` ✅ · `npx tsc --noEmit` ✅ · `yarn build` ✅ — **First Load JS da rota `/` caiu de 176 kB → 145 kB**; routes-manifest sem `/home`.

### Fase 3 — Refatoração de renderização ✅ (concluída em 04/08/2026)

**Objetivo:** R1 + R2 — Home como **Server Component** com ilhas client e **i18n por cookie** no servidor (sem flash de idioma).

| Item | Ação executada | Resultado |
|---|---|---|
| **R2 — i18n por cookie** | Criado `lib/i18n.ts` (RSC-friendly): `LANGUAGE_COOKIE`, `getLanguage(cookie)`, `translate(lang, key)`, `createTranslator(lang)`. `LanguageProvider` agora recebe `initialLanguage` (do servidor) em vez de ler `localStorage` no `useEffect`; `setLanguage` grava cookie (`language=...; path=/; max-age=31536000; samesite=lax`) + localStorage (migração) e chama `router.refresh()` para re-renderizar as seções server; `useEffect` sincroniza `document.documentElement.lang`. `app/layout.tsx` virou Server Component async com `await cookies()` → `<html lang={lang}>` + `<LanguageProvider initialLanguage={lang}>`; script inline migra `localStorage → cookie` antes da hidratação (visitantes antigos). | **HTML servido já no idioma correto** — verificado via `curl`: com `Cookie: language=pt-BR` → `<html lang="pt-BR">` + textos pt; sem cookie → `lang="en"` + textos en. Fim do flash de inglês (M2) e do estado duplicado (M1) |
| **R1 — Server Components** | `app/page.tsx` virou Server Component async que lê o cookie e passa `t = createTranslator(lang)` para as seções estáticas (ordem original preservada). Convertidos a Server Components: `hero`, `about`, `skills`, `experiences`, `tech-challenge`, `contact` — removidos `"use client"` e `useLanguage()`; agora recebem prop `t: Translator`. Cards `skill-card`/`experience-card` renderizam props traduzidas diretamente (fim da dupla tradução M3/R3). `techbadge` perdeu o wrapper `Tooltip` redundante (que só repetia o nome). | **6 seções estáticas enviam 0 JS próprio**; rota `/` caiu de **145 kB → 51.5 kB** |
| **Ilhas client mantidas** | `testimonials-section` (carousel), `projects-section` (tabs), `header`/`footer` (toggles) permanecem client — onde há interação real (M5). `testimonials-section` perdeu o wrapper `AnimatedSection` (redundante com o `motion` interno). `project-card` parou de chamar `t()` em title/description (já traduzidos na seção). | framer-motion confinado às ilhas (carousel + hovers de projetos) |
| **Dead code removido** | `routes/routes.tsx`, `components/home/`, `section-loader`, `animated-loader`, `animated-section`, `constants/animation.ts`, `components/ui/tooltip.tsx` + dep `@radix-ui/react-tooltip` (do `package.json`/`yarn.lock`) | Fim do waterfall de `next/dynamic`/`Suspense`/loaders; Radix tooltip fora do bundle |
| **M3 — dados redundantes** | `CHALLENGES[].description`/`.content` e `PROJECTS[].description` (mortos) removidos do `config.ts`; `tech-challenge-section` usa apenas `descriptionKey` | Sem dupla tradução nem campos duplicados |
| **a11y/perf** | `globals.css`: `@media (prefers-reduced-motion: reduce)` desativa `scroll-behavior: smooth` | Respeita preferência do usuário |

**Validação:** `yarn lint` ✅ · `yarn format:check` ✅ · `npx tsc --noEmit` ✅ · `yarn build` ✅ — **rota `/`: 145 kB → 51.5 kB** (First Load JS: 176 kB, sendo ~102 kB de framework/shared); route manifest sem `/home`.

**Observações:**
- A rota `/` passou de estática para **`ƒ Dynamic`** (server-rendered on demand): o layout lê `cookies()` para servir `<html lang>` e conteúdo no idioma correto na primeira pintura. Tradeoff esperado do R2 (conteúdo server-side completo por request, cache HTTP/CDN ainda efetivo).
- framer-motion permanece no primeiro carregamento dentro da ilha client (testimonials/projects, importados estaticamente). Conforme M5, manter só onde há valor real; as seções estáticas não o carregam mais. Se quiser adiar ainda mais, usar `next/dynamic` nas 2 ilhas (Fase 4/5).
- O toggle de idioma agora dispara `router.refresh()`: as seções server re-renderizam com o novo cookie e as ilhas client mantêm estado — sem reload completo.

### Fase 4 — Qualidade ✅ (concluída em 04/08/2026)

**Objetivo:** testes automatizados nas ilhas client, CI no GitHub Actions e SEO técnico (`sitemap`/`robots`).

| Item | Ação executada | Resultado |
|---|---|---|
| **Testes — Vitest + RTL** | Instaladas devDeps: `vitest@^4.1.10`, `@vitejs/plugin-react@^6.0.5`, `jsdom@^30.0.1`, `@testing-library/react@^16.3.2`, `@testing-library/dom@^10.4.1`, `@testing-library/jest-dom@^7.0.0`, `@testing-library/user-event@^14.6.3`. Criados `vitest.config.ts` (plugin react, `environment: "jsdom"`, alias `@` → raiz, `setupFiles`) e `vitest.setup.ts` (jest-dom, `cleanup`, mocks de `matchMedia`/`ResizeObserver`/`IntersectionObserver`, **mock global de `framer-motion`** que renderiza `motion.*` como `div`/`button` e filtra props de animação, mock de `next/navigation`). Scripts `"test": "vitest run"` e `"test:watch": "vitest"` no `package.json` | **21 testes / 4 arquivos, todos passando** |
| **Casos de teste** | `lib/i18n.test.ts` (getLanguage/translate/createTranslator — fallbacks); `context/language-context.test.tsx` (cookie + localStorage + `router.refresh()` + `<html lang>`); `components/shared/projects-section.test.tsx` (tabs de filtro: contagem de projetos por aba via painel ativo do Radix, labels en/pt-BR); `components/shared/testimonials-section.test.tsx` (primeiro depoimento, autoplay com `vi.useFakeTimers`, prev/next, dots, pause via `fireEvent`, labels pt-BR) | Ilhas client cobertas + unidade do i18n |
| **CI — GitHub Actions** | Criado `.github/workflows/ci.yml`: `checkout@v4`, `setup-node@v4` (Node 23.10.0, cache yarn), `yarn install --frozen-lockfile --ignore-engines`, depois `lint`, `format:check`, `tsc --noEmit`, `test` e `build` | Qualidade toda verificada em push/PR para `main` |
| **SEO — sitemap/robots** | Criados `app/sitemap.ts` (URL base `https://ruanvalente-portfolio.vercel.app`, changeFrequency monthly) e `app/robots.ts` (allow `/`, aponta `sitemap.xml`) | `/sitemap.xml` e `/robots.txt` gerados pelo Next |
| **A4 — UI de erro/404** | Criados `app/not-found.tsx` (404 estilizado com link de volta) e `app/error.tsx` (error boundary client com `reset`, loga o erro) | UX de falha tratada; `/_not-found` servido com UI própria |

**Validação:** `yarn lint` ✅ · `yarn format:check` ✅ · `npx tsc --noEmit` ✅ · `yarn test` ✅ (21/21) · `yarn build` ✅ — rota `/` mantida em **51.5 kB / 176 kB First Load JS** (nenhum novo JS no bundle do app; deps de teste são devDeps).

**Observações:**
- O mock global de `framer-motion` (no `vitest.setup.ts`) renderiza `motion.<tag>` como `div`/`button` e descarta props de animação (`whileInView`, `transition`, `variants`…), evitando depender do runtime de animação nos testes; o componente de motion renderizado ganha `displayName` para passar no `react/display-name` do ESLint.
- `userEvent` combinado com `vi.useFakeTimers()` travava (timeout 5s); o teste de pause usa `fireEvent` síncrono para interagir sob fake timers.
- O tab `grid-cols-4` do `TabsList` em `projects-section` recebe 5 tabs (visual pré-existente, fora do escopo desta fase).

### Fase 5 — Acessibilidade/SEO finos ✅ (concluída em 04/08/2026)

**Objetivo:** conformidade WCAG (axe), respeito a `prefers-reduced-motion`, JSON-LD e `viewport`/`themeColor` dinâmicos.

| Item | Ação executada | Resultado |
|---|---|---|
| **`viewport`/`themeColor` dinâmicos** | Export `viewport` adicionado ao `app/layout.tsx`: `width=device-width`, `initialScale=1`, `themeColor` com `media` por `prefers-color-scheme` (`#f8fafc` light / `#020817` dark, extraídos do CSS vars `--background`) | Barra do browser e meta tag seguem o tema claro/escuro |
| **JSON-LD Person** | `app/layout.tsx` renderiza `<script type="application/ld+json">` com schema.org `Person` (`name`, `url`, `jobTitle`, `worksFor: Compass UOL`, `sameAs` GitHub/LinkedIn) | Dados estruturados para rich results/SEO |
| **`prefers-reduced-motion`** | `MotionConfig reducedMotion="user"` em `components/theme-provider.tsx` (envolve todas as ilhas framer-motion); `globals.css`: media query agora também zera `animation-duration`/`transition-duration`/`scroll-behavior` em `*` (desliga `animate-bounce` etc.); `BackToTopButton` usa `behavior: "auto"` quando `prefers-reduced-motion: reduce` | Animações framer e CSS respeitam a preferência do usuário |
| **Auditoria axe** | Instalado `jest-axe@^11.0.0` (devDep); matcher registrado no `vitest.setup.ts` via `expect.extend(toHaveNoViolations)`; declaração de tipos em `types/jest-axe.d.ts` + augment de `vitest` em `types/vitest.d.ts`; novo `test/a11y.test.tsx` roda axe em `Header`, `ProjectsSection` e `TestimonialsSection` | **2 violações reais encontradas e corrigidas** (abaixo) |
| **Fix 1 — heading-order (testimonials)** | O nome do autor no carousel era `h4` pulando o `h3` (h2 do título da seção → h4). Alterado para `h3` em `testimonials-section.tsx` | Árvore de headings sem buracos |
| **Fix 2 — headings semânticos (cards)** | `CardTitle` do shadcn renderizava `div`; alterado para `h3` em `components/ui/card.tsx` (usado por `project-card`, `tech-challenge-section`, `skill-card`) — todos sob um `h2` de seção | Títulos de card entram no outline; heading-order íntegro (h1 hero → h2 seções → h3 cards) |

**Validação:** `yarn lint` ✅ · `yarn format:check` ✅ · `npx tsc --noEmit` ✅ · `yarn test` ✅ (24/24, incluindo 3 audits axe sem violações) · `yarn build` ✅ — rota `/` mantida em **51.5 kB / 176 kB First Load JS**.

**Observações:**
- A regra `color-contrast` do axe roda como "incomplete" em jsdom (sem layout engine real), então não falha em CI; a checagem visual de contraste segue garantida pelo ajuste da Fase 2 (M8).
- `jest-axe@11` puxa `axe-core@4.12` como dependência transitiva; nenhum dos dois entra no bundle de produção.
- Roadmap 5/5 fases concluídas — nenhuma pendência no `PLAN.md`.

---

## 📦 Anexo — Dependências para revisão

### ✅ Removidas na Fase 1 (04/08/2026)

`@hookform/resolvers`, `zod`, `date-fns`, `react-hook-form`, `recharts`, `react-day-picker`, `embla-carousel-react`, `cmdk`, `vaul`, `input-otp`, `react-resizable-panels`, `sonner` + 22 pacotes `@radix-ui/react-*` (accordion, alert-dialog, aspect-ratio, avatar, checkbox, collapsible, context-menu, hover-card, label, menubar, navigation-menu, popover, progress, radio-group, scroll-area, select, separator, slider, switch, toast, toggle, toggle-group).

### Em uso (manter)

`@radix-ui/react-slot`, `@radix-ui/react-dialog` (via `sheet`), `@radix-ui/react-tabs`, `@radix-ui/react-dropdown-menu`, `class-variance-authority`, `clsx`, `tailwind-merge`, `tailwindcss-animate`, `lucide-react`, `react-icons` (apenas em `techbadge`), `framer-motion` (apenas ilhas client — testimonials/projects), `next-themes`, `next`, `react`, `react-dom`.

> ⚠️ `@radix-ui/react-tooltip` **removido na Fase 3** (wrapper redundante no `techbadge` eliminado). Radix restante conferido: `sheet` (header) depende de `@radix-ui/react-dialog`; `dropdown-menu` é usado por `language-toggle`/`theme-toggle` (header); `tabs` por `projects-section`; `slot` pelo `button`.

### ✅ Adicionadas na Fase 4 (devDependencies — 04/08/2026)

`vitest`, `@vitejs/plugin-react`, `jsdom`, `@testing-library/react`, `@testing-library/dom`, `@testing-library/jest-dom`, `@testing-library/user-event`. Não entram no bundle de produção (`next build` inalterado).

### ✅ Adicionadas na Fase 5 (devDependencies — 04/08/2026)

`jest-axe` (auditoria WCAG nos testes). Não entra no bundle de produção.
