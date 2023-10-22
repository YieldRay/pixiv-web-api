/**
 * Run this script to generate api/index.ts
 */

import * as fs from "node:fs";
import * as path from "node:path";
import { fileURLToPath, URL } from "node:url";

let code = `// Auto generated\n`;

const indexPath = fileURLToPath(new URL("./api/index.ts", import.meta.url));

const modules = fs.readdirSync(fileURLToPath(new URL("./api", import.meta.url))).filter((name) => name !== "index.ts");

for (const module of modules) {
    code += `export * from "./${path.basename(module, ".ts")}";\n`;
}

fs.writeFileSync(indexPath, code);
