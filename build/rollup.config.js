import vue from "rollup-plugin-vue";
import buble from "rollup-plugin-buble";
import commonjs from "rollup-plugin-commonjs";
import replace from "rollup-plugin-replace";
import uglify from "rollup-plugin-uglify";
import builtins from "rollup-plugin-node-builtins";
import minimist from "minimist";

const argv = minimist(process.argv.slice(2));

const config = {
    input: "src/plugin.js",
    output: {
        name: "seatingplanner",
        exports: "named"
    },
    plugins: [
        replace({
            "process.env.NODE_ENV": JSON.stringify("production")
        }),
        commonjs(),
        vue({
            css: true,
            compileTemplate: true,
            template: {
                isProduction: true
            }
        }),
        buble(),
        builtins,
    ]
};

// Only minify browser (iife) version
if (argv.format === "iife") {
    config.plugins.push(uglify);
}

export default config;