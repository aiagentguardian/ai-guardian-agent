import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Shield,
  Lock,
  AlertTriangle,
  CheckCircle,
  ArrowRight,
  XCircle,
  Code2,
  Zap,
  Eye,
  FileCode,
  Package,
  Clock,
  GitBranch,
  Database,
  ShieldCheck,
  Cpu
} from 'lucide-react';

const features = [
  {
    icon: Shield,
    title: "Real-time Protection",
    description: "Continuous monitoring and instant vulnerability detection"
  },
  {
    icon: Cpu,
    title: "AI-Powered Analysis",
    description: "Advanced machine learning algorithms for precise threat detection"
  },
  {
    icon: Database,
    title: "Comprehensive Scans",
    description: "Deep analysis of code, dependencies, and configurations"
  },
  {
    icon: ShieldCheck,
    title: "Best Practices",
    description: "Alignment with industry security standards and protocols"
  }
];

const exampleAnalysis = {
  score: 78,
  metrics: {
    filesScanned: 247,
    dependenciesChecked: 89,
    criticalIssues: 3,
    timeToFix: "~4 hours"
  },
  threats: [
    {
      level: 'high',
      description: 'Outdated npm packages with known vulnerabilities',
      impact: 'Potential security exploits through vulnerable dependencies',
      remediation: 'Update packages to their latest secure versions'
    },
    {
      level: 'medium',
      description: 'Insufficient input validation',
      impact: 'Risk of injection attacks',
      remediation: 'Implement proper input validation and sanitization'
    }
  ],
  recommendations: [
    'Enable automated dependency updates',
    'Implement strict input validation',
    'Add Content Security Policy headers'
  ]
};

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 to-blue-500/10 animate-pulse" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0)_0%,rgba(0,0,0,0.8)_100%)]" />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <motion.div
              animate={{ y: [-10, 10] }}
              transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
              className="inline-block mb-8"
            >
              <Shield className="w-24 h-24 text-emerald-500" />
            </motion.div>
            
            <motion.h1
              className="text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-emerald-400 to-blue-500 text-transparent bg-clip-text"
              animate={{ scale: [1, 1.02, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              Guardian AI
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-xl md:text-2xl text-gray-400 mb-12 max-w-3xl mx-auto"
            >
              Your AI-powered security sentinel, analyzing repositories for potential threats and vulnerabilities in real-time.
            </motion.p>

            <motion.div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  to="/app"
                  className="inline-flex items-center px-8 py-4 text-lg font-medium rounded-lg text-black bg-emerald-500 hover:bg-emerald-400 transition-colors"
                >
                  Analyze Repository
                  <motion.div
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </motion.div>
                </Link>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <a
                  href="#demo"
                  className="inline-flex items-center px-8 py-4 text-lg font-medium rounded-lg text-emerald-500 border border-emerald-500 hover:bg-emerald-500/10 transition-colors"
                >
                  See Demo
                  <Eye className="ml-2 w-5 h-5" />
                </a>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <div className="w-6 h-10 rounded-full border-2 border-gray-500 flex items-start justify-center p-2">
            <motion.div
              className="w-1.5 h-1.5 rounded-full bg-emerald-500"
              animate={{ y: [0, 16, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
          </div>
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">Intelligent Security Analysis</h2>
            <p className="text-xl text-gray-400">Powered by advanced AI to keep your code secure</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="p-6 rounded-xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-800 backdrop-blur-sm"
              >
                <feature.icon className="w-12 h-12 text-emerald-500 mb-4" />
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Example Analysis Section */}
      <section id="demo" className="py-20 bg-gray-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">See It In Action</h2>
            <p className="text-xl text-gray-400">Example security analysis report</p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Left Column - Score and Metrics */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              {/* Security Score */}
              <div className="p-6 rounded-xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-800 backdrop-blur-sm">
                <h3 className="text-xl font-semibold mb-4">Security Score</h3>
                <div className="relative w-48 h-48 mx-auto">
                  <svg className="w-full h-full transform -rotate-90">
                    <circle
                      className="text-gray-800"
                      strokeWidth="12"
                      stroke="currentColor"
                      fill="transparent"
                      r="90"
                      cx="96"
                      cy="96"
                    />
                    <motion.circle
                      className="text-emerald-500"
                      strokeWidth="12"
                      strokeLinecap="round"
                      stroke="currentColor"
                      fill="transparent"
                      r="90"
                      cx="96"
                      cy="96"
                      initial={{ strokeDasharray: "0 565.48" }}
                      animate={{ strokeDasharray: `${2 * Math.PI * 90 * exampleAnalysis.score / 100} ${2 * Math.PI * 90}` }}
                      transition={{ duration: 1.5, delay: 0.5 }}
                    />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-4xl font-bold">{exampleAnalysis.score}%</span>
                  </div>
                </div>
              </div>

              {/* Metrics Grid */}
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 rounded-lg bg-gray-900/50 border border-gray-800">
                  <FileCode className="w-6 h-6 text-emerald-500 mb-2" />
                  <div className="text-2xl font-bold mb-1">{exampleAnalysis.metrics.filesScanned}</div>
                  <p className="text-sm text-gray-400">Files Scanned</p>
                </div>
                
                <div className="p-4 rounded-lg bg-gray-900/50 border border-gray-800">
                  <Package className="w-6 h-6 text-emerald-500 mb-2" />
                  <div className="text-2xl font-bold mb-1">{exampleAnalysis.metrics.dependenciesChecked}</div>
                  <p className="text-sm text-gray-400">Dependencies</p>
                </div>
                
                <div className="p-4 rounded-lg bg-gray-900/50 border border-gray-800">
                  <AlertTriangle className="w-6 h-6 text-red-500 mb-2" />
                  <div className="text-2xl font-bold mb-1">{exampleAnalysis.metrics.criticalIssues}</div>
                  <p className="text-sm text-gray-400">Critical Issues</p>
                </div>
                
                <div className="p-4 rounded-lg bg-gray-900/50 border border-gray-800">
                  <Clock className="w-6 h-6 text-emerald-500 mb-2" />
                  <div className="text-2xl font-bold mb-1">{exampleAnalysis.metrics.timeToFix}</div>
                  <p className="text-sm text-gray-400">Est. Fix Time</p>
                </div>
              </div>
            </motion.div>

            {/* Right Column - Threats and Recommendations */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              {/* Threats */}
              <div className="p-6 rounded-xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-800 backdrop-blur-sm">
                <h3 className="text-xl font-semibold mb-4">Identified Threats</h3>
                <div className="space-y-4">
                  {exampleAnalysis.threats.map((threat, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="p-4 rounded-lg bg-gray-900/50"
                    >
                      <div className="flex items-center space-x-3 mb-2">
                        {threat.level === 'high' ? (
                          <XCircle className="w-5 h-5 text-red-500" />
                        ) : (
                          <AlertTriangle className="w-5 h-5 text-yellow-500" />
                        )}
                        <span className="text-gray-300 font-medium">{threat.description}</span>
                      </div>
                      <div className="ml-8 text-sm text-gray-400">
                        <p><span className="text-gray-300">Impact:</span> {threat.impact}</p>
                        <p><span className="text-gray-300">Solution:</span> {threat.remediation}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Recommendations */}
              <div className="p-6 rounded-xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-800 backdrop-blur-sm">
                <h3 className="text-xl font-semibold mb-4">Recommendations</h3>
                <ul className="space-y-3">
                  {exampleAnalysis.recommendations.map((recommendation, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-center space-x-3"
                    >
                      <CheckCircle className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                      <span className="text-gray-300">{recommendation}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-8 rounded-xl bg-gradient-to-r from-emerald-500/10 to-blue-500/10 border border-gray-800"
          >
            <h2 className="text-3xl font-bold mb-4">Ready to Secure Your Code?</h2>
            <p className="text-xl text-gray-400 mb-8">
              Start analyzing your repository now and get instant security insights.
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                to="/app"
                className="inline-flex items-center px-8 py-4 text-lg font-medium rounded-lg text-black bg-emerald-500 hover:bg-emerald-400 transition-colors"
              >
                Get Started
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

export default Home;