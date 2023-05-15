import cleanUp from "rollup-plugin-cleanup";
import terser from "@rollup/plugin-terser";
export default {
    input: "index.js",
    output: {
        file: "dist/boundle.js",
        format: "esm",
    },
    plugins: [cleanUp(), terser()],
};
