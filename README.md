<<<<<<< HEAD
```
 ██████╗ ████████╗███████╗███████╗████████╗    ██████╗██╗     ██╗
██╔═══██╗╚══██╔══╝██╔════╝██╔════╝╚══██╔══╝   ██╔════╝██║     ██║
██║   ██║   ██║   █████╗  ███████╗   ██║█████╗██║     ██║     ██║
██║▄▄ ██║   ██║   ██╔══╝  ╚════██║   ██║╚════╝██║     ██║     ██║
╚██████╔╝   ██║   ███████╗███████║   ██║      ╚██████╗███████╗██║
 ╚══▀▀═╝    ╚═╝   ╚══════╝╚══════╝   ╚═╝       ╚═════╝╚══════╝╚═╝
```

## 🤖 QTEST-CLI - AI Test Generator

**AI-powered automated test generation for JavaScript/TypeScript projects using advanced code analysis and intelligent test creation.**

## 🚀 What It Does

QTest CLI is an intelligent test generation tool that:

- 🧠 **Analyzes your code** using advanced static analysis
- 🤖 **Generates comprehensive tests** using AI (OpenAI/Gemini via Cline CLI)
- 📊 **Detects project types** (React, Vue, Node.js, Express, etc.)
- 🎯 **Supports multiple frameworks** (Jest, Vitest, Mocha)
- 🔄 **Watches for changes** and auto-regenerates tests
- 📈 **Calculates code complexity** for better test coverage
- 🌐 **Provides fallback templates** when AI is unavailable

## 📦 Installation

### Global Installation (Recommended)
```bash
npm install -g qtest-cli
```

### Verify Installation
```bash
qtest-cli --version
```

## 🛠️ Prerequisites

1. **Node.js** >= 20.0.0

## ⚡ Quick Start

```bash
# Initialize configuration
qtest-cli init

# Generate tests for current directory
qtest-cli analyze .

# Generate tests for specific file
qtest-cli analyze ./src/utils.js

# Watch for changes and auto-generate
qtest-cli watch ./src
```

## 📖 Commands

| Command | Description | Options |
|---------|-------------|---------|
| `qtest-cli init` | Initialize configuration | - |
| `qtest-cli analyze [path]` | Analyze and generate tests | `-f, --framework` `-o, --output` |
| `qtest-cli watch [path]` | Watch for changes | `-f, --framework` |
| `qtest-cli --help` | Show help | - |
| `qtest-cli --version` | Show version | - |

### Command Options

- `-f, --framework <framework>` - Test framework (jest, vitest, mocha) [default: jest]
- `-o, --output <path>` - Output directory for tests [default: ./tests]

## 🏗️ Architecture

```
┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐
│   QTest CLI     │──▶│      Server     │───▶│   Cline CLI +   │
│   (Your Tool)   │    │   (Hosted)      │    │   AI Models     │
└─────────────────┘    └─────────────────┘    └─────────────────┘
        │                       │                       │
        ▼                       ▼                       ▼
┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐
│   File Analysis │    │   Code Analysis │    │   Test Files    │
│   Project Type  │    │   AI Processing │    │   Generated     │
│   Complexity    │    │   Prompt Build  │    │   Validated     │
└─────────────────┘    └─────────────────┘    └─────────────────┘
```

##  Usage Examples

### Basic Analysis
```bash
# Analyze current directory with Jest
qtest-cli analyze .

# Use Vitest framework
qtest-cli analyze . --framework vitest

# Custom output directory
qtest-cli analyze ./src --output ./my-tests
```

### Watch Mode
```bash
# Watch for changes in src directory
qtest-cli watch ./src

# Watch with Mocha framework
qtest-cli watch ./src --framework mocha
```

### Project Types Detected
- ✅ **React Applications** - Generates component tests with @testing-library/react
- ✅ **Vue.js Projects** - Vue component testing
- ✅ **Node.js APIs** - Express route testing with request mocking
- ✅ **TypeScript Projects** - Full TypeScript support
- ✅ **Next.js Apps** - Page and API route testing
- ✅ **Vanilla JavaScript** - Pure function testing

## 🔧 Configuration

Run `qtest-cli init` to create `.ai-test-suite.json`:

```json
{
  "framework": "jest",
  "outputDir": "./tests",
  "filePatterns": ["**/*.js", "**/*.ts", "**/*.jsx", "**/*.tsx"],
  "excludePatterns": [
    "node_modules/**",
    "dist/**", 
    "build/**",
    "**/*.test.*"
  ]
}
```

## 📊 Example Output

### Input File (`utils.js`)
```javascript
function add(a, b) {
  return a + b;
}

function divide(a, b) {
  if (b === 0) {
    throw new Error('Division by zero');
  }
  return a / b;
}

module.exports = { add, divide };
```

### Generated Test (`utils.test.js`)
```javascript
const { add, divide } = require('./utils');

describe('utils', () => {
  describe('add', () => {
    test('should add two numbers correctly', () => {
      expect(add(2, 3)).toBe(5);
      expect(add(0, 0)).toBe(0);
      expect(add(-1, 1)).toBe(0);
    });

    test('should handle negative numbers', () => {
      expect(add(-5, -3)).toBe(-8);
    });
  });

  describe('divide', () => {
    test('should divide two numbers correctly', () => {
      expect(divide(10, 2)).toBe(5);
      expect(divide(9, 3)).toBe(3);
    });

    test('should throw error for division by zero', () => {
      expect(() => divide(10, 0)).toThrow('Division by zero');
    });

    test('should handle decimal division', () => {
      expect(divide(7, 2)).toBe(3.5);
    });
  });
});
```

## ✨ Features

- 🤖 **AI-Powered**: Uses state-of-the-art language models for intelligent test generation
- 🎯 **Multi-Framework**: Supports Jest, Vitest, and Mocha out of the box
- 📁 **Smart Analysis**: Automatically detects project types and configurations
- 🔄 **Watch Mode**: Continuously monitors files and regenerates tests on changes
- 🚀 **Fast Execution**: Optimized for quick test generation with fallbacks
- 🌐 **Cloud-Powered**: Leverages hosted AI infrastructure for reliability
- 📊 **Detailed Analysis**: Provides complexity scores and code insights
- 🎨 **Beautiful CLI**: Colorful, informative command-line interface
- 💾 **Local Fallback**: Works offline with enhanced template generation
- 🔧 **Configurable**: Flexible configuration options for any project setup

## 📈 Supported File Types

| Extension | Support | Framework Integration |
|-----------|---------|---------------------|
| `.js` | ✅ Full | Jest, Vitest, Mocha |
| `.ts` | ✅ Full | Jest, Vitest, Mocha |
| `.jsx` | ✅ Full | Jest + @testing-library/react |
| `.tsx` | ✅ Full | Jest + @testing-library/react |
| `.vue` | 🔄 Coming Soon | Vue Testing Utils |

## 🔍 Analysis Capabilities

- **Function Detection**: Identifies all exported functions and methods
- **Class Analysis**: Detects classes and their methods
- **Dependency Mapping**: Maps imports and requires
- **Async Pattern Recognition**: Handles promises and async/await
- **React Component Detection**: Identifies React components and hooks
- **API Route Detection**: Recognizes Express routes and middleware
- **Complexity Scoring**: Calculates cyclomatic complexity
- **Edge Case Generation**: Creates comprehensive test scenarios


## 📋 Example Workflows

### For React Projects
```bash
qtest-cli analyze ./src/components --framework jest
# Generates tests with @testing-library/react
# Includes component rendering, prop testing, event handling
```

### For Node.js APIs
```bash
qtest-cli analyze ./routes --framework jest
# Generates API route tests with request/response mocking
# Includes status code validation and error handling
```

### For TypeScript Projects  
```bash
qtest-cli analyze ./src --framework vitest
# Full TypeScript support with proper type checking
# Generates .test.ts files with correct imports
```

## 🔒 Privacy & Security

- ✅ **Code Analysis**: Performed locally on your machine
- ✅ **Secure Transmission**: Files sent to server over HTTPS
- ✅ **No Storage**: Your code is not stored on our servers
- ✅ **Fallback Mode**: Works completely offline when needed

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🔗 Links

- 📦 **npm Package**: [qtest-cli](https://www.npmjs.com/package/qtest-cli)
- 🐙 **GitHub Repository**: [ai-testing-tool](https://github.com/Pratik5252/ai-testing-tool)
- 🐛 **Issues & Support**: [GitHub Issues](https://github.com/Pratik5252/ai-testing-tool/issues)
- 📧 **Contact**: pratik yesane

## 🙏 Acknowledgments

- **Cline CLI** - For providing the AI integration framework
- **CodeRabbit** - For helping with intelligent code reviews and analysis
- **OpenAI/Gemini** - For powering the intelligent test generation  
- **The Open Source Community** - For inspiration and contributions

---

<div align="center">

**Made with ❤️ by [pratik yesane](https://github.com/Pratik5252)**

*If QTest CLI helps your project, please consider giving it a ⭐ on GitHub!*

</div>
=======
# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
>>>>>>> 958d8a22c718f187221bd1bb77068b3502e3f6f3
