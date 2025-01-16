import { Shield, Cpu, Database, ShieldCheck } from 'lucide-react';

const features = [
  {
    icon: Shield,
    title: "Autonomous Guardians",
    description: "AI-powered agents that continuously monitor blockchain activity for threats and vulnerabilities"
  },
  {
    icon: Cpu,
    title: "Real-Time Protection",
    description: "Instant detection and response to potential exploits across DeFi protocols and smart contracts"
  },
  {
    icon: Database,
    title: "Cross-Chain Security",
    description: "Comprehensive protection across multiple blockchains and Layer 2 networks"
  },
  {
    icon: ShieldCheck,
    title: "Automatic Mitigation",
    description: "Smart response systems that can automatically prevent and mitigate security threats"
  }
];

export function Features() {
  return (
    <section className="py-20 relative ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Decentralized Security Intelligence</h2>
          <p className="text-xl text-gray-400">Advanced AI guardians protecting your digital assets 24/7</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="p-6 rounded-xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-800 backdrop-blur-sm hover:scale-105 transition-transform"
              >
                <Icon className="w-12 h-12 text-emerald-500 mb-4" />
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}