# WARP.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.


Here is some context about my environment that could be useful:
{
  "directory_state": {
    "pwd": "/Users/aurelioaragones/Desarrollo/workspace/safelanding-spain-landingpage",
    "home": "/Users/aurelioaragones"
  },
  "operating_system": {
    "platform": "MacOS"
  },
  "current_time": "2026-01-22T21:25:00Z",
  "shell": {
    "name": "zsh",
    "version": "5.9"
  }
}


External context:

[
  {
    "source": {
      "type": "WARP_DOCUMENTATION",
      "id": "getting-started/quickstart-guide/coding-in-warp"
    },
    "content": "---\ndescription: Agents can generate and edit code directly from within Warp.\n---\n\n# Coding in Warp\n\nWhen you enter a git repo for the first time, Warp will enter an initialization flow to index your codebase and generate a WARP.md file.&#x20;\n\nAs you're in the repo, Warp will enter an advanced code generation flow that supports both single-line and multi-file changes when it detects an opportunity to write code.\n\nFor example, Warp may write code when you prompt:\n\n* **Code creation**: “Write a function in JavaScript to debounce an input”\n* **Based on error outputs, suggest fixes**: “Fix this TypeScript error.”\n* **Edit a single file**: “Update all instances of ‘var’ to ‘let’ in this file.”\n* **Make batch changes**: “Add headers to all .py files in this directory”\n\n**The best way to experience this is to try it yourself —** [_open the Prompt below in Warp_](https://app.warp.dev/drive/prompt/Generate-a-custom-Warp-theme-K8oloLrCZAHuaYKfz2cNqI)\n\n{% code overflow=\"wrap\" %}\n```markup\nDetect the correct Warp themes directory based on the current operating system:\n- On macOS, use ~/.warp/themes/\n- On Linux, use ${XDG_DATA_HOME:-$HOME/.local/share}/warp-terminal/themes/\n- On Windows, use $env:APPDATA\\warp\\Warp\\data\\themes\\\\n\nCreate the directory if it doesn’t already exist. \n\nThen, generate a custom Warp theme named {{theme_name}} in valid YAML format, following the official structure from Warp’s documentation. Exclude the background_image field, and do not include any extra or missing fields. Save the theme as {{theme_name}}.yaml in the detected themes directory.\n\nOnce the theme is created and verified, confirm completion by telling me where the theme file was saved.\n```\n{% endcode %}\n\n***\n\n### Context\n\n#### Codebase Context\n\nWarp can index your Git-tracked codebases to help agents understand your code and generate accurate, context-aware responses. **No code is stored on Warp servers**.\n\nYou can view and manage your indexed codebases under `Settings > Code > Codebase Index` and you can also specify whether to automatically index new folders as you navigate them.\n\nIf your codebase is large, you can exclude specific files by adding them to a `.warpindexingignore` file.\n\n#### Other types of context\n\nYou can provide different types of input as context directly to the agent to guide its behavior and improve response quality. This includes:\n\n* [Blocks](https://docs.warp.dev/agents/using-agents/agent-context#attaching-blocks-as-context) from your terminal output\n* [Images](https://docs.warp.dev/agents/using-agents/agent-context#attaching-images-as-context)\n* [Files and code](https://docs.warp.dev/agents/using-agents/agent-context#referencing-files-and-code-using) (using the @ symbol)\n* [Public websites](https://docs.warp.dev/agents/using-agents/agent-context#referencing-websites-via-urls) via URLs\n\n#### Warp Drive as Context\n\nAgents pull directly from your [**Warp Drive**](https://docs.warp.dev/features/warp-drive) contents to generate more accurate responses -- including your **Workflows**, **Notebooks**, **Prompts**, and **Environment Variables**.\n\n* When used, context appears under the “References” or “Derived from” section in the conversation.\n* This setting is **enabled by default** and can be managed via: `Settings > AI > Knowledge > Warp Drive as Agent Mode Context`.\n\n#### Rules\n\n**Rules** let you provide persistent context to Agents, enabling smarter and more personalized responses.&#x20;\n\nYou can create global rules (accessed through [Warp Drive](https://docs.warp.dev/features/warp-drive) > Personal > Rules) or project scoped rules, defined in a WARP.md file.\n\n**Examples of Rules include:**\n\n* Coding standards and best practices\n* Project- or workspace-specific guidelines\n* Personal preferences for tools, formatting, or behavior\n\nHow to access project-specific Rules\n\n1. From the file-searcher, CMD+O and search \"WARP.md\"\n2. From the file tree, click the \"code\" icon when in a repo\n\nHow to access Global Rules\n\n1. From the [Warp Drive](https://docs.warp.dev/features/warp-drive) > Personal > Rules\n2. From the [Command Palette](../../features/warp-ai/command-palette.md), search for \"Open AI Rules\"\n3. From the Settings panel, `Settings > AI > Knowledge > Manage Rules`\n4. From the macOS Menu, `AI > Open Rules`\n"
  },
  {
    "source": {
      "type": "WEB_PAGE",
      "id": "https://warp.dev"
    },
    "content": "...after using Warp, I understand what the development flows of the future look like. Warp is unlike any other tool I've used, and I'll never go back. Michael Stoppelman Former SVP of Engineering I used to be sold on Cursor... ...after using Warp, I understand what the development flows of the future look like. Warp is unlike any other tool I've used, and I'll never go back. Michael Stoppelman Former SVP of Engineering I used to be sold on Cursor... ...after using Warp, I understand what the development flows of the future look like. Warp is unlike any other tool I've used, and I'll never go"
  },
  {
    "source": {
      "type": "WEB_PAGE",
      "id": "https://warp.dev"
    },
    "content": "back. Michael Stoppelman Former SVP of Engineering I used to be sold on Cursor... ...after using Warp, I understand what the development flows of the future look like. Warp is unlike any other tool I've used, and I'll never go back. Michael Stoppelman Former SVP of Engineering Code Code Code Agentic workflows for understanding your codebase, writing code, and debugging Agentic workflows for understanding your codebase, writing code, and debugging Agentic workflows for understanding your codebase, writing code, and debugging Maintain Maintain Maintain Use Warp to summarize user logs, debug"
  },
  {
    "source": {
      "type": "WEB_PAGE",
      "id": "https://warp.dev"
    },
    "content": "Sentry errors, and even generate SQL queries in your REPLs Use Warp to summarize user logs, debug Sentry errors, and even generate SQL queries in your REPLs Use Warp to summarize user logs, debug Sentry errors, and even generate SQL queries in your REPLs Deploy Deploy Deploy Warp works with any CLI tool to bring agent support to version control, CI/CD, and deployment workflows Warp works with any CLI tool to bring agent support to version control, CI/CD, and deployment workflows Warp works with any CLI tool to bring agent support to version control, CI/CD, and deployment workflows Full"
  }
]

---

## Important files

- `package.json`: Defines scripts, dependencies, and dev tooling (Vite, ESLint, React).
- `vite.config.js`: Vite configuration with React plugin.
- `eslint.config.js`: Flat ESLint config for JS/JSX with React Hooks and React Refresh.
- `src/main.jsx`: React entry point that mounts the app into `#root`.
- `src/App.jsx`: Single-page landing layout using Tailwind CSS utility classes and `lucide-react` icons.

## Commands

Project uses npm-style scripts via `package.json`.

- Start dev server (HMR, default Vite port 5173):
  - `npm run dev`
- Build for production:
  - `npm run build`
- Preview production build locally:
  - `npm run preview`
- Lint the codebase (JS/JSX, flat config):
  - `npm run lint`

There is no test framework configured in this template yet; do not assume `npm test` or similar exists.

## Architecture and structure

- **Framework & bundler**
  - React (functional components) with Vite/rolldown (`vite` overridden to `npm:rolldown-vite@7.2.5` in `package.json`).
  - Entry file `src/main.jsx` renders `<App />` inside `StrictMode` and imports global styles from `src/index.css`.

- **Application layout** (`src/App.jsx`)
  - Single top-level `App` component returning the entire marketing/landing page.
  - Uses Tailwind CSS utility classes extensively for layout, spacing, color, and typography.
  - Icons imported from `lucide-react` and used inline in JSX for visual cues in sections (services, FAQs, emotional content, footer, etc.).
  - Page is composed of semantic sections identified by IDs to support in-page navigation:
    - Sticky navigation bar with anchor links (`#what-we-do`, `#services`, `#about`, `#faq`, `#contact`) and primary "Book a Consultation" CTA.
    - Hero section with headline, subheadline, primary and secondary CTAs, and supporting trust text.
    - "What We Do" section: four-step process cards (clarity call, document preparation, arrival support, settled in Spain).
    - "Services" section: three pricing/feature-style cards for different service tiers.
    - FAQ section: list of common questions with explanatory answers.
    - Emotional/values section: narrative copy and supporting benefit chips.
    - About / Vision section: visual panel plus explanation of brand vision and values, including belief list.
    - Final CTA banner encouraging booking a consultation.
    - Footer with contact info, quick links, disclaimer, and location note.

- **Styling**
  - Tailwind CSS (v4) is used; classes are applied directly in JSX (`className` strings).
  - Global styles are pulled from `src/index.css` (not inspected here, but assumed to include Tailwind base, components, and utilities).
  - Color palette is warm (amber/orange) and consistent across sections, emphasizing brand identity.

- **Tooling**
  - ESLint flat config (`eslint.config.js`) with:
    - `@eslint/js` recommended rules.
    - `eslint-plugin-react-hooks` recommended rules.
    - `eslint-plugin-react-refresh` Vite-specific config.
    - Browser globals via `globals.browser`.
    - Custom rule: `no-unused-vars` ignores variables matching `^[A-Z_]` (useful for JSX components or constants).
  - `dist` is globally ignored for linting.

## Conventions and guidance for future changes

- Keep the landing page single-page structure unless explicitly refactoring to a multi-route app; new sections should follow the existing pattern: semantic `<section>` with `id`, wrapped in a `max-w-7xl` container and consistent padding.
- Reuse the existing warm amber/orange visual style and Tailwind utility patterns for layout to maintain visual coherence.
- When adding new interactive behavior (e.g., working navigation menu, form handling), prefer small, focused React components extracted from `App.jsx` to keep the main component readable.
- When configuring additional tooling (tests, more ESLint rules, formatting), integrate with the existing npm scripts and Vite setup instead of creating parallel CLIs.
