import { Github, Coins, MessageCircle, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

const features = [
  {
    title: 'GitHub Repository Analysis',
    description: 'Deep security analysis of your GitHub repositories using advanced AI to detect vulnerabilities and provide actionable insights.',
    icon: Github,
    status: 'Available Now',
    statusColor: 'bg-emerald-500',
  },
  {
    title: 'On-Chain Solana Analysis',
    description: 'Detect suspicious activities and potential security threats in Solana smart contracts and transactions.',
    icon: Coins,
    status: 'Coming Soon',
    statusColor: 'bg-blue-500',
  },
  {
    title: 'Social Behavior Analysis',
    description: 'Comprehensive analysis of social interactions across Discord, Telegram, and Twitter to identify suspicious patterns.',
    icon: MessageCircle,
    status: 'Coming Soon',
    statusColor: 'bg-blue-500',
  },
  {
    title: 'Guardian Agent Launchpad',
    description: 'Create and deploy your own customized AI guardian agents tailored to analyze specific projects with personalized security parameters.',
    icon: Sparkles,
    status: 'Coming Soon',
    statusColor: 'bg-blue-500',
  },
];

export function FeatureCards() {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Platform Features</h2>
          <p className="text-xl text-gray-400">Comprehensive security analysis across multiple platforms</p>
        </div>

        <div className="space-y-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 to-blue-500/10 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300 opacity-0 group-hover:opacity-100" />
                <div className="relative p-8 rounded-2xl border border-gray-800 bg-gray-900/50 backdrop-blur-sm hover:border-gray-700 transition-colors">
                  <div className="flex items-start gap-6">
                    <div className="p-4 rounded-lg bg-gray-800/50">
                      <Icon className="w-8 h-8 text-emerald-500" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-2xl font-semibold">{feature.title}</h3>
                        <span className={`px-4 py-1 rounded-full text-sm font-medium ${feature.statusColor} text-black`}>
                          {feature.status}
                        </span>
                      </div>
                      <p className="text-gray-400 text-lg">{feature.description}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}