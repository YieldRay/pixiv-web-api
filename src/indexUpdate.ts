/**
 * Run this script to generate index.ts
 */

import * as fs from "node:fs";
import * as path from "node:path";
import { fileURLToPath, URL } from "node:url";

let code = "";

const indexPath = fileURLToPath(new URL("./index.ts", import.meta.url));

const modules = fs.readdirSync(fileURLToPath(new URL("./api", import.meta.url)));

for (const module of modules) {
    code += `export * from "./api/${path.basename(module, ".ts")}";\n`;
}

fs.writeFileSync(indexPath, code);
