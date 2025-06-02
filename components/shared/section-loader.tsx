import { motion } from "framer-motion";

interface SectionLoaderProps {
  text: string;
  height?: string;
}

export function SectionLoader({ text, height = "h-64" }: SectionLoaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className={`${height} flex items-center justify-center`}
    >
      <div className="animate-pulse text-muted-foreground">
        Loading {text}...
      </div>
    </motion.div>
  );
}
