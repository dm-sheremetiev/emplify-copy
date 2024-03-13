import commonjs from "rollup-plugin-commonjs";
import packageJson from "./package.json";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import resolve from "@rollup/plugin-node-resolve";
import scss from "rollup-plugin-scss";
import typescript from "rollup-plugin-typescript2";
// import svg from 'rollup-plugin-svg-import';
import react from "react";
import reactDom from "react-dom";
import proptypes from "prop-types";
import copy from "rollup-plugin-copy";
import progress from "rollup-plugin-progress";
import del from "rollup-plugin-delete";
import json from "@rollup/plugin-json";
import image from "rollup-plugin-img";
import path from "path";
import fs from "fs";
import postcss from "rollup-plugin-postcss";
import replace from 'replace-in-file'
import svgr from '@svgr/rollup'

const fixAssetsPaths = () => {
	return {
		name: "fix-assets-paths",
		writeBundle() {
			fs.unlink(path.resolve("bundle/index.es.css"), () => {});
			return replace({
				files: ["../storybookBuild/bundle.css", "../storybookBuild/*.js"],

				from: [/((..\/..\/|..\/)assets)/gm, /((..\/..\/|..\/)fonts)/gm],
				to: ["./assets", "./assets/fonts"],
			})
				.then(() => {})
				.catch((error) => {});
		},
	};
};
export default {
	input: "src/index.tsx",
	output: [
		{
			file: packageJson.main,
			format: "cjs",
			sourcemap: true,
		},
		{
			file: packageJson.module,
			format: "esm",
			sourcemap: true,
		},
	],
	external: ["react", "react-dom", "events"],
	onwarn: (warning) => {
		const ignoredCircular = ["react-virtualized", "d3-interpolate", "d3-scale"];
		if (
			warning.code === "CIRCULAR_DEPENDENCY" &&
			ignoredCircular.some((d) => warning.importer.includes(d))
		) {
			return;
		}
		throw Error(warning.message);
	},
	plugins: [
		//del({ targets: "../storybookBuild/*", force: true }),
		progress(),
		peerDepsExternal(),
		resolve({
			preferBuiltins: true,
		}),
		scss({
			fileName: "index2.css",
			outputStyle: "compressed",
			failOnError: true,
			runtime: require("sass"),
			include: [
				"/**/*.scss",
				"/**/*.sass",
				"src/assets/scss/*.scss"
			],
		}),
		postcss({
			config: {
				path: './postcss.config.js'
			},
			minimize: true,
			modules: false,
			use: {
				sass: true,
				stylus: null,
				less: { javascriptEnabled: true },
			},
			extract: true,
		}),
		commonjs({
			include: "node_modules/**",
			namedExports: {
				react: Object.keys(react),
				"react-dom": Object.keys(reactDom),
				"prop-types": Object.keys(proptypes),
				exenv: ["canUseDOM"],
			},
		}),
		// svg({
		// 	// process SVG to DOM Node or String. Default: false
		// 	stringify: false
		// }),
		svgr({ native: true, babel: false }),
		typescript({ useTsconfigDeclarationDir: true }),
		copy({
			targets: [{ src: "src/assets", dest: "../storybookBuild" }],
		}),
		json(),
		image({
			limit: 1000000,
		}),
		fixAssetsPaths(),
	],
};
