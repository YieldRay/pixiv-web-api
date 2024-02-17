import { defineConfig } from "rollup"
import typescript from "@rollup/plugin-typescript"
import * as fs from "node:fs"
import * as path from "node:path"
;(() => {
    // auto generate ./src/api/index.ts
    let code = `// Auto generated\n`
    fs.readdirSync("./src/api")
        .filter((name) => name !== "index.ts")
        .forEach((module) => {
            code += `export * from "./${path.basename(module, ".ts")}"\n`
        })
    fs.writeFileSync("./src/api/index.ts", code)
})()

export default defineConfig({
    input: "src/index.ts",
    output: [
        {
            file: "./dist/index.js",
            format: "es",
        },
        {
            file: "./dist/index.umd.js",
            format: "umd",
            name: "pixiv_web_api",
        },
    ],
    plugins: [typescript()],
})
