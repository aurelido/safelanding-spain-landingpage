import { readFileSync, writeFileSync, rmSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const distDir = path.resolve(__dirname, '../dist');

// Import the SSR bundle produced by `vite build --ssr`
const { render } = await import(path.join(distDir, 'server/entry-server.js'));
const appHtml = render();

// Read the client-built index.html
const indexPath = path.join(distDir, 'index.html');
let html = readFileSync(indexPath, 'utf-8');

// Inject pre-rendered markup into the root element
html = html.replace(
  '<div id="root"></div>',
  `<div id="root">${appHtml}</div>`,
);

writeFileSync(indexPath, html);

// Clean up the server bundle — it's only needed at build time
rmSync(path.join(distDir, 'server'), { recursive: true, force: true });

console.log('✔ Pre-rendered dist/index.html with static markup');
