# 🛡️ Guardian AI SDK

<div align="center">

[![npm version](https://img.shields.io/npm/v/@guardian-ai/sdk.svg?style=flat-square)](https://www.npmjs.com/package/@guardian-ai/sdk)
[![TypeScript](https://img.shields.io/badge/TypeScript-Ready-blue?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=flat-square)](https://opensource.org/licenses/MIT)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com)

**🤖 Autonomous AI-powered security analysis for your repositories and smart contracts 🔒**

[🚀 Installation](#installation) •
[⚡ Quick Start](#quick-start) •
[✨ Features](#features) •
[📚 Documentation](#documentation) •
[💡 Examples](#examples) •
[🤝 Contributing](#contributing)

</div>

## ⚡ Quick Start

### 📦 Installation

```bash
# Using npm
npm install @guardian-ai/sdk

# Using yarn
yarn add @guardian-ai/sdk

# Using pnpm
pnpm add @guardian-ai/sdk
```

### 🎯 Basic Usage

```typescript
import { GuardianAI } from '@guardian-ai/sdk';

// Initialize the Guardian AI
const guardian = new GuardianAI({
  apiKey: process.env.ANTHROPIC_API_KEY,
});

// Analyze a repository
const analysis = await guardian.analyzeRepository('https://github.com/user/repo');
console.log(analysis);
```

### ⚛️ React Integration

```typescript
import { useGuardianAI } from '@guardian-ai/sdk';

function SecurityAnalyzer() {
  const guardian = useGuardianAI({
    apiKey: process.env.ANTHROPIC_API_KEY,
  });

  const handleAnalysis = async () => {
    const result = await guardian.analyzeRepository('https://github.com/user/repo');
    console.log(result);
  };

  return <button onClick={handleAnalysis}>Analyze Repository</button>;
}
```

## 🌟 Features

- 🔍 **Deep Security Analysis**
  - 🎯 Comprehensive repository scanning
  - ⚠️ Vulnerability detection and classification
  - 📦 Dependency security audit
  
- 🔐 **Smart Contract Security**
  - 🤖 Automated vulnerability detection
  - ✅ Best practices validation
  - ⚡ Gas optimization suggestions
  
- 💻 **Developer Experience**
  - 📘 TypeScript support
  - ⚛️ React hooks for easy integration
  - 📚 Comprehensive documentation
  - 🔄 Modern ESM and CommonJS support

## 📚 Documentation

### 🛡️ GuardianAI Class

The main class for interacting with the Guardian AI SDK.

#### ⚙️ Constructor Options

```typescript
interface SecurityAnalysisOptions {
  apiKey: string;        // Your Anthropic API key
  model?: string;        // AI model to use (default: 'claude-3-haiku-20240307')
  maxTokens?: number;    // Maximum tokens for analysis (default: 4096)
}
```

#### 🔧 Methods

| Method | Description | Parameters | Return Type |
|--------|-------------|------------|-------------|
| `analyzeRepository` | Performs security analysis on a GitHub repository | `repoUrl: string` | `Promise<SecurityAnalysisResult>` |

### 📝 Types

```typescript
interface SecurityThreat {
  level: 'high' | 'medium' | 'low';
  description: string;
  impact: string;
  remediation: string;
}

interface SecurityAnalysisResult {
  score: number;              // Overall security score (0-100)
  threats: SecurityThreat[];  // List of identified threats
  recommendations: string[];  // Security recommendations
}
```

## 💡 Examples

### 🔍 Basic Security Analysis

```typescript
const guardian = new GuardianAI({
  apiKey: process.env.ANTHROPIC_API_KEY,
});

// Analyze a specific repository
const analysis = await guardian.analyzeRepository(
  'https://github.com/example/defi-protocol'
);

// Handle the results
console.log(`Security Score: ${analysis.score}`);
analysis.threats.forEach(threat => {
  console.log(`${threat.level.toUpperCase()}: ${threat.description}`);
});
```

### ⚛️ React Component with Loading State

```typescript
function SecurityScanner() {
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState(null);
  const guardian = useGuardianAI({
    apiKey: process.env.ANTHROPIC_API_KEY,
  });

  const handleScan = async (repoUrl) => {
    try {
      setLoading(true);
      const analysis = await guardian.analyzeRepository(repoUrl);
      setResults(analysis);
    } catch (error) {
      console.error('Analysis failed:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      {loading ? (
        <div>Analyzing repository...</div>
      ) : results ? (
        <div>
          <h2>Security Score: {results.score}</h2>
          {/* Display other results */}
        </div>
      ) : null}
    </div>
  );
}
```

## 🤝 Contributing

We welcome contributions! Please feel free to submit a Pull Request. 🎉

1. 🍴 Fork the repository
2. 🌿 Create your feature branch (`git checkout -b feature/amazing-feature`)
3. ✍️ Commit your changes (`git commit -m 'Add some amazing feature'`)
4. 🚀 Push to the branch (`git push origin feature/amazing-feature`)
5. 🎯 Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

<div align="center">
  <sub>Built with ❤️ by the Guardian AI Network team. 🚀</sub>
</div>