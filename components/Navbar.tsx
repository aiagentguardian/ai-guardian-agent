import Link from 'next/link';
import { Shield, Twitter } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center space-x-2">
            <Shield className="w-8 h-8 text-emerald-500" />
            <span className="font-bold text-xl">Guardian AI</span>
          </Link>
          <div className="flex items-center space-x-6">
            <Link
              href="https://x.com/GuardianAgentAI"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-emerald-500 transition-colors"
            >
              <Twitter className="w-5 h-5" />
            </Link>
            <Link
              href="/app"
              className="text-gray-300 hover:text-white px-3 py-2 rounded-md"
            >
              Analyze Repository
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}