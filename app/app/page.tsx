'use client';

import { AnalysisForm } from '@/components/AnalysisForm';
import { motion } from 'framer-motion';

export default function Analysis() {
  return (
    <div className="min-h-screen py-20">
      <div className="max-w-4xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8"
        >
          <h1 className="text-4xl font-bold mb-4">Repository Analysis</h1>
          <p className="text-xl text-gray-400">Enter your GitHub repository URL to begin the security analysis</p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <AnalysisForm />
        </motion.div>
      </div>
    </div>
  );
}