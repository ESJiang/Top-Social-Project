import { defineConfig } from "vite";
import topLevelAwait from "vite-plugin-top-level-await";
import path from "path";

export default defineConfig({
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "./src"),
        },
    },
    plugins: [
        topLevelAwait({
            promiseExportName: "__tla",
            promiseImportName: i => `__tla_${i}`,
        }),
    ],
});
