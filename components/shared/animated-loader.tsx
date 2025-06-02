import { motion } from "framer-motion";

export function AnimatedLoader() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="flex items-center justify-center min-h-screen"
    >
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 2,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
        className="w-12 h-12 border-4 border-amber-600 dark:border-yellow-400 border-t-transparent rounded-full"
      />
      <motion.span
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.5 }}
        className="ml-4 text-lg font-medium text-amber-600 dark:text-yellow-400"
      >
        Loading...
      </motion.span>
    </motion.div>
  );
}
