import scss from "rollup-plugin-scss";
import postcss from 'postcss'
import autoprefixer from 'autoprefixer'
import { terser } from "rollup-plugin-terser";
import { nodeResolve } from '@rollup/plugin-node-resolve';
import execute from 'rollup-plugin-execute'



const production = !process.env.ROLLUP_WATCH;

export default {
    input: './assets/js/main.js',
    output: [{
        file: './build/js/main.min.js',
        format: 'esm',
        plugins: [
            production && terser(), //production minify
        ]
    }],
    plugins: [
        scss({
            processor: () => postcss([autoprefixer()]),
            output: "./build/css/style.min.css",
            failOnError: true,
            outputStyle: "compressed",
            watch: './assets',
        }),
        nodeResolve(),
        execute('node compress-images.mjs')
    ]
};