const fs = require("node:fs");
const path = require("node:path");

const root = __dirname;
const publishDir = path.join(root, "dist");
const excluded = new Set([
  ".git",
  ".netlify",
  "node_modules",
  "dist",
  "netlify",
  "build.js",
  "netlify.toml",
  "README.md",
  "CNAME"
]);

fs.rmSync(publishDir, { recursive: true, force: true });
fs.mkdirSync(publishDir, { recursive: true });

for (const entry of fs.readdirSync(root, { withFileTypes: true })) {
  if (excluded.has(entry.name)) continue;

  const source = path.join(root, entry.name);
  const destination = path.join(publishDir, entry.name);

  if (entry.isDirectory()) {
    fs.cpSync(source, destination, { recursive: true });
  } else if (entry.isFile()) {
    fs.copyFileSync(source, destination);
  }
}

console.log("Prepared BABALUX static site in dist/; Netlify functions remain outside the public directory.");
