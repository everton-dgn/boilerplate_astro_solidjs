<div align="center">

![GitHub License](https://img.shields.io/github/license/everton-dgn/boilerplate_astro_solidjs?style=plastic)
![GitHub repo size](https://img.shields.io/github/repo-size/everton-dgn/boilerplate_astro_solidjs?style=plastic)
![GitHub Repo stars](https://img.shields.io/github/stars/everton-dgn/boilerplate_astro_solidjs?color=yellow&style=plastic)
![Node Version](https://img.shields.io/badge/node-%3E%3D22-brightgreen?style=plastic)
![Built With](https://img.shields.io/badge/built%20with-Astro%20%2B%20SolidJS-blue?style=plastic)

</div>

<h1 align="center">Boilerplate Complete and updated with Astro.js, Solid.js, Typescript, CSS Modules, Tests, and more</h1>

<br />

# 📝 About the Project

This application is a comprehensive boilerplate for complex and large systems, especially those that need to scale with security and code quality. It combines the power of Astro.js for static site generation with the reactivity of Solid.js for dynamic components.

We sought to achieve three pillars:
- **Readability**: Clean, well-documented code that's easy to understand
- **Reusability**: Components and utilities designed to be reused across the application
- **Refactorability**: Well-structured code that's easy to modify and extend

In the construction of the UI, the Atomic Design structure was chosen, organizing the global components into atoms, molecules, organisms, and templates. This methodology helps create consistent, scalable, and maintainable UI systems.

In addition to being constantly updated, this project was configured in the smallest details to serve as a basis for professional projects that require standardized and easy-to-maintain code architecture and design.

<br />

---

# 📌 Contents

- [Technologies](#globe_with_meridians-technologies)
- [Features](#triangular_flag_on_post-features)
- [Project Structure](#file_folder-project-structure)
- [Prerequisites](#white_check_mark-prerequisites)
- [How to install and run the project](#question-how-to-install-and-run-the-project)
  - [Clone Repository](#clone-repository)
  - [Install Dependencies](#install-dependencies)
  - [Start Development Environment](#start-development-environment)
  - [Generate Production Build](#generate-production-build)
  - [Start Production Environment](#start-production-environment)
  - [Run Tests](#run-tests)
  - [Run Tests in Watch Mode](#run-tests-in-watch-mode)
  - [Run E2E Tests](#run-e2e-tests)
  - [Run Lints](#run-lints)
  - [Format code with BiomeJS](#format-code-with-biomejs)
  - [Check for Available Updates for Dependencies](#check-for-available-updates-for-dependencies)
- [Testing](#test_tube-testing)
- [Contributing](#handshake-contributing)
- [Author](#technologist-author)

<br />

---

# 🌐 Technologies

🚀 **Astro.js** - Fast, modern static site generator with island architecture

⚛ **Solid.js** - Reactive JavaScript library for building user interfaces

🔥 **TypeScript** - Typed JavaScript for better developer experience and code quality

💅 **CSS Modules** - Locally scoped CSS for component styling

🚩 **Lints & Formatters**:
  - Lefthook - Git hooks manager
  - BiomeJS - Fast formatter and linter
  - Commitlint - Lint commit messages

✅ **Testing**:
  - Vitest - Fast unit testing framework
  - Playwright - End-to-end testing framework

<br />

---

# 🚩 Features

- [x] **Responsive design** - Mobile-first approach for all screen sizes

- [x] **Atomic Design** - Structured component hierarchy for maintainable UI

- [x] **Accessibility** - Detection of prefers-reduced-motion and other a11y features

- [x] **Theming** - Theme configuration with CSS Modules for consistent styling

- [x] **Developer Experience**:
  - Global aliases for importing utilities like `clsx` without manual imports
  - Instant lint and formatter with BiomeJS
  - Lefthook runs lint only on changed files

- [x] **Performance**:
  - Ultra-optimized font setup, each font only 2kb with preload
  - Astro's partial hydration for minimal JavaScript

- [x] **Icons** - Customizable icon system supporting your own SVGs and any icon from [Iconify](https://icon-sets.iconify.design/)

- [x] **CI/CD**:
  - Automatic release generation and versioning
  - Pre-configured GitHub Actions workflows

<br />

---

# 📁 Project Structure

```
boilerplate_astro_solidjs/
├── .github/             # GitHub workflows and configuration
├── public/              # Static assets
├── src/                 # Source code
│   ├── @types/          # TypeScript type definitions
│   ├── components/      # UI components (Atomic Design)
│   │   ├── atoms/       # Basic building blocks (buttons, inputs, etc.)
│   │   ├── molecules/   # Groups of atoms functioning together
│   │   ├── organisms/   # Complex components composed of molecules and atoms
│   │   └── layouts/     # Page layout components
│   ├── hooks/           # Custom SolidJS hooks
│   ├── pages/           # Astro pages for routing
│   ├── tests/           # Test utilities
│   │   ├── flows/       # Test flows and scenarios
│   │   ├── mocks/       # Mock data and functions
│   │   ├── pages/       # Page tests
│   │   ├── providers/   # Test providers
│   │   └── utils/       # Testing utilities
│   └── theme/           # Styling and theming
├── astro.config.ts      # Astro configuration
├── biome.json           # BiomeJS configuration
├── package.json         # Project dependencies and scripts
├── playwright.config.ts # Playwright E2E test configuration
├── tsconfig.json        # TypeScript configuration
└── vitest.config.ts     # Vitest configuration
```

<br />

---

# ✅ Prerequisites

- **Node.js** - Version 22 or higher (LTS recommended)
- **pnpm** - Latest version (used as the package manager)

<br />

---

# ❓ How to install and run the project

## Clone Repository

```bash
git clone https://github.com/everton-dgn/boilerplate_astro_solidjs.git
cd boilerplate_astro_solidjs
```

## Install Dependencies

```bash
pnpm i
```

## Start Development Environment

```bash
pnpm dev
```

For verbose output:

```bash
pnpm dev:verbose
```

Available at http://localhost:3000

## Generate Production Build

```bash
pnpm build
```

## Start Production Environment

```bash
pnpm preview
```

Available at http://localhost:3000

## Run Tests

```bash
pnpm test
```

With coverage:

```bash
pnpm test:c
```

## Run Tests in Watch Mode

```bash
pnpm test:w
```

With UI:

```bash
pnpm test:ui
```

## Run E2E Tests

```bash
pnpm test:e2e
```

With UI:

```bash
pnpm test:e2e:ui
```

Generate test code:

```bash
pnpm test:e2e:codegen
```

## Run Lints

```bash
pnpm lint
```

Type checking:

```bash
pnpm typecheck
```

Format checking:

```bash
pnpm check:format
```

## Format code with BiomeJS

```bash
pnpm format
```

## Check for Available Updates for Dependencies

```bash
pnpm check:update
```

<br />

---

# 🧪 Testing

The project uses a comprehensive testing strategy:

### Unit and Component Tests (Vitest)

Component tests are located in `__tests__` directories next to the components they test. Example:

```typescript
// src/components/atoms/Button/__tests__/Button.test.tsx
import { screen } from '@solidjs/testing-library'
import { renderWithProviders } from 'tests/providers/component'
import { event } from 'tests/utils'

import { Button } from '..'

describe('[Component] Button', () => {
  it('should call a function once on click on the button', async () => {
    const onClick = vi.fn()
    renderWithProviders(() => (
      <Button label="More information" onClick={onClick} />
    ))

    const btn = screen.getByRole('button', { name: /More information/i })
    await event().click(btn)

    expect(onClick).toHaveBeenCalledTimes(1)
  })
})
```

### End-to-End Tests (Playwright)

E2E tests simulate real user interactions in a browser environment. Run them with:

```bash
pnpm test:e2e
```

<br />

---

# 🤝 Contributing

Contributions are welcome! Here's how you can contribute:

1. Fork the repository
2. Create a feature branch: `git checkout -b feat/my-feature`
3. Commit your changes: `git commit -m 'feat: add some feature'`
   - This project uses conventional commits, so please follow the format
4. Push to the branch: `git push origin feat/my-feature`
5. Open a Pull Request

Before submitting, please ensure:
- Your code follows the project's coding style
- All tests pass
- You've added tests for new features
- Your commit messages follow the conventional commits format

<br />

---


# 👨‍💻 Author

By [Éverton Toffanetto](https://devinsights.dev).

:link: LinkedIn: https://www.linkedin.com/in/everton-toffanetto

:link: YouTube: https://youtube.com/@toffanettodev
