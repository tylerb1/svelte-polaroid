import svelte from "rollup-plugin-svelte";
import resolve from "@rollup/plugin-node-resolve";
const pkg = require("./package.json");
export default {
    input: "index.js",
    output: [
        { file: pkg.module, format: "es" },
        { file: pkg.main, format: "umd", name: "svelte-polaroid" },
    ],
    plugins: [svelte(), resolve()],
};
