import { defineConfig } from "rollup";
import typescript from "@rollup/plugin-typescript";

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
});
