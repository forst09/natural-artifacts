import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';
import { defineConfig } from 'vite';
import { resolve } from 'path';
import handlebars from 'vite-plugin-handlebars';

export default defineConfig(() => {
    return {
        plugins: [
            ViteImageOptimizer({
                jpg: {
                    quality: 80
                },
                jpeg: {
                    quality: 80
                },
            }),
            handlebars({
                partialDirectory: resolve(__dirname, 'src/layout/'),
            }),
        ],
        build: {
            rollupOptions: {
                //позволяет работать с несколькимим страницами в проекте
                input: {
                    main: resolve(__dirname, 'index.html'),
                    nested: resolve(__dirname, 'nested/index.html'),
                },
                //убирает хэширование файлов при сборке проекта
                output: {
                    entryFileNames: `assets/[name].js`,
                    chunkFileNames: `assets/[name].js`,
                    assetFileNames: `assets/[name].[ext]`
                }
            },
        }
    };
});