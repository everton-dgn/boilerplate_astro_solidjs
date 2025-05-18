<div align="center">

![GitHub License](https://img.shields.io/github/license/everton-dgn/boilerplate_astro_solidjs?style=plastic)
![GitHub repo size](https://img.shields.io/github/repo-size/everton-dgn/boilerplate_astro_solidjs?style=plastic)
![GitHub Repo stars](https://img.shields.io/github/stars/everton-dgn/boilerplate_astro_solidjs?color=yellow&style=plastic)

</div>

<h1 align="center">Boilerplate Complete and updated with Astro.js, Solid.js, Typescript, CSS Modules, Tests, and more</h1>

<br />

# :memo: About the Project

This application is a boilerplate for complex and large systems, especially those that need to scale with security and code quality.

We sought to achieve three pillars: readability, reusability, and refactorability.

In the construction of the UI, the Atomic Design structure was chosen, organizing the global components into atoms, molecules, organisms, and templates.

In addition to being constantly updated, this project was configured in the smallest details to serve as a basis for professional projects that require standardized and easy-to-maintain code architecture and design.

<br />

---

# :pushpin: Contents

- [Technologies](#globe_with_meridians-technologies)
- [Features](#triangular_flag_on_post-features)
- [Prerequisites](#white_check_mark-prerequisites)
- [How to install and run the project](#question-how-to-install-and-run-the-project)
  - [Clone Repository](#clone-repository)
  - [Install Dependencies](#install-dependencies)
  - [Start Development Environment](#start-development-environment)
  - [Generate Production Build](#generate-production-build)
  - [Start Production Environment](#start-production-environment)
  - [Run Tests](#run-tests)
  - [Run Tests in Watch Mode](#run-tests-in-watch-mode)
  - [Run Lints](#run-lints)
  - [Format code with prettier](#format-code-with-prettier)
  - [Check for Available Updates for Dependencies](#check-for-available-updates-for-dependencies)
- [Author](#technologist-author)

<br />

---

# :globe_with_meridians: Technologies

🚀 Astro.js

⚛ Solid.js

🔥 TypeScript

💅 CSS Modules

🚩 Lints: Lefthook, BiomeJS and Commitlint

✅ Tests: Vitest and Playwright

<br />

---

# :triangular_flag_on_post: Features

- [x] Responsive design

- [x] Atomic Design

- [x] Detection of prefers-reduced-motion

- [x] Theme configuration with CSS Modules

- [x] Global aliases for importing utilities like `clsx` without manual imports

- [x] Customizable icon system supporting your own SVGs and any icon from [Iconify](https://icon-sets.iconify.design/)

- [x] Instant lint and formatter with BiomeJS

- [x] Lefthook runs lint only on changed files

- [x] Ultra-optimized font setup, each font only 2kb with preload, fully framework-agnostic

- [x] Automatic release generation and versioning

- [x] CI/CD workflow pre-configured

<br />

---

# :white_check_mark: Prerequisites

- node (latest version lts).

- pnpm (latest version lts).

<br />

---

# :question: How to install and run the project

## Clone Repository

```bash
git clone https://github.com/everton-dgn/boilerplate_astro_solidjs.git
```

## Install Dependencies

```bash
pnpm i
```

## Start Development Environment

```bash
pnpm dev
```

Available in http://localhost:3000

## Generate Production Build

```bash
pnpm build
```

## Start Production Environment

```bash
pnpm preview
```

Available in http://localhost:3000

## Run Tests

```bash
pnpm test
```

## Run Tests in Watch Mode

```bash
pnpm test:w
```

## Run Lints

```bash
pnpm lint
```

```bash
pnpm typecheck
```

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

# :technologist: Author

By [Éverton Toffanetto](https://programadordesucesso.com).

:link: LinkedIn: https://www.linkedin.com/in/everton-toffanetto

:link: YouTube: https://youtube.com/@toffanettodev
