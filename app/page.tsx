'use client';

import { Shield, ArrowRight, Eye } from 'lucide-react';
import Link from 'next/link';
import { Features } from '@/components/Features';
import { FeatureCards } from '@/components/FeatureCards';
import { ExampleAnalysis } from '@/components/ExampleAnalysis';
import { CTASection } from '@/components/CTASection';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ 
                type: "spring",
                stiffness: 260,
                damping: 20,
                delay: 0.3
              }}
              className="inline-block mb-8"
            >
              <Shield className="w-24 h-24 text-emerald-500" />
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-emerald-400 to-blue-500 text-transparent bg-clip-text"
            >
              AI Guardian Network
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="text-xl md:text-2xl text-white-400 mb-6 max-w-3xl mx-auto"
            >
              Autonomous On-Chain Security Agents
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="text-lg md:text-xl text-gray-400 mb-12 max-w-3xl mx-auto"
            >
              A crypto-native security platform powered by autonomous AI guardians that continuously patrol blockchains, smart contracts, and DeFi protocols. Our agents provide real-time monitoring, alerting, and automatic threat mitigation, moving beyond traditional static security audits.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.9 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  href="/app"
                  className="inline-flex items-center px-8 py-4 text-lg font-medium rounded-lg text-black bg-emerald-500 hover:bg-emerald-400 transition-colors"
                >
                  Deploy Guardians
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </motion.div>
              
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <a
                  href="#demo"
                  className="inline-flex items-center px-8 py-4 text-lg font-medium rounded-lg text-emerald-500 border border-emerald-500 hover:bg-emerald-500/10 transition-colors"
                >
                  View Demo
                  <Eye className="ml-2 w-5 h-5" />
                </a>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
        <div className="absolute inset-0 overflow-hidden" style={{zIndex: -10}}>
          <video 
            style={{filter: "brightness(0.4)"}} 
            src="/background.mov"
            autoPlay={true} 
            loop 
            muted
            className="absolute z-10 w-auto min-w-full min-h-full max-w-none"
          />
        </div>
        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-6 h-10 rounded-full border-2 border-gray-500 flex items-start justify-center p-2"
          >
            <motion.div
              animate={{ y: [0, 16, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1.5 h-1.5 rounded-full bg-emerald-500"
            />
          </motion.div>
        </motion.div>
      </section>

      <Features />
      <FeatureCards />
      <ExampleAnalysis />
      <CTASection />
    </main>
  );
}