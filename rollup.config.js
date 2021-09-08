import scss from "rollup-plugin-scss";
import livereload from 'rollup-plugin-livereload'
import postcss from 'postcss'
import autoprefixer from 'autoprefixer'
import serve from 'rollup-plugin-serve'
import { nodeResolve } from '@rollup/plugin-node-resolve';


export default {
    input: './assets/js/main.js',
    output: [{
        file: './build/js/main.min.js',
        format: 'esm',
    }],
    plugins: [
        scss({
            processor: () => postcss([autoprefixer()]),
            output: "./build/css/style.min.css",
            failOnError: true,
            outputStyle: "compressed",
            watch: './assets',
        }),
        livereload({
            watch: './',
            port: 12345,
        }),
        serve('./'),
        nodeResolve(),
    ]
};