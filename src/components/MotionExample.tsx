'use client';

import { motion } from 'motion/react';

export function MotionExample() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="p-4 bg-blue-100 rounded-lg"
    >
      <h3 className="text-lg font-semibold mb-2">Motion Example</h3>
      <p>This component demonstrates Motion library usage.</p>
    </motion.div>
  );
}
