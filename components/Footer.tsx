'use client';
import { Github } from 'lucide-react';
import Link from 'next/link';

export function Footer() {
  return (
    <footer className="border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col items-center justify-center space-y-4">
          <Link
            href="https://github.com/aiagentguardian/ai-guardian-agent"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 text-gray-400 hover:text-emerald-500 transition-colors"
          >
            <Github className="w-5 h-5" />
            <span>View on GitHub</span>
          </Link>
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} AI Guardian Network. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}