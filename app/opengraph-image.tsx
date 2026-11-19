import { ImageResponse } from "next/og";

import { SITE_AUTHOR } from "@/lib/site";

export const alt = `${SITE_AUTHOR} — Frontend Engineer`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "72px",
        background: "#fbf8ff",
        color: "#18181b",
      }}
    >
      <div style={{ display: "flex", fontSize: 28, letterSpacing: "-0.02em" }}>
        {SITE_AUTHOR}
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
        <div
          style={{
            display: "flex",
            fontSize: 86,
            fontWeight: 800,
            lineHeight: 1.05,
            letterSpacing: "-0.04em",
          }}
        >
          Frontend Engineer
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 34,
            color: "#c2410c",
            fontWeight: 600,
          }}
        >
          React · TypeScript · Next.js
        </div>
      </div>
      <div
        style={{
          display: "flex",
          width: 120,
          height: 8,
          borderRadius: 999,
          background: "#c2410c",
        }}
      />
    </div>,
    size
  );
}
