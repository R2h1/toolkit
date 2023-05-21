import { nodeResolve } from '@rollup/plugin-node-resolve'; // 解析 node_modules 中的模块
import commonjs from '@rollup/plugin-commonjs'; // cjs => esm
import alias from '@rollup/plugin-alias'; // alias 和 resolve 功能
import replace from '@rollup/plugin-replace';
import eslint from '@rollup/plugin-eslint';
import { babel } from '@rollup/plugin-babel';
import { terser } from 'rollup-plugin-terser';
import clear from 'rollup-plugin-clear';
import typescript from '@rollup/plugin-typescript';
import json from '@rollup/plugin-json'; // 支持在源码中直接引入json文件，不影响下面的
import { name as pkgName, version, author } from '../package.json';

const banner = '/*!\n'
  + ` * ${pkgName} v${version}\n`
  + ` * (c) 2023-${new Date().getFullYear()} ${author}\n`
  + ' * Released under the MIT License.\n'
  + ' */';

export default {
  input: 'src/index.ts',
  // 同时打包多种规范的产物
  output: [
    {
      file: `lib/${pkgName}.umd.js`,
      format: 'umd',
      name: pkgName,
      banner
    },
    {
      file: `lib/${pkgName}.umd.min.js`,
      format: 'umd',
      name: pkgName,
      banner,
      plugins: [terser()]
    },
    {
      file: `lib/${pkgName}.cjs.js`,
      format: 'cjs',
      name: pkgName,
      banner
    },
    {
      file: `lib/${pkgName}.esm.js`,
      format: 'es',
      banner
    }
  ],
  // 注意 plugin 的使用顺序
  plugins: [
    json(),
    clear({
      targets: ['lib']
    }),
    alias(),
    replace({
      'process.env.NODE_ENV': JSON.stringify(
        process.env.NODE_ENV || 'development'
      ),
      preventAssignment: true
    }),
    nodeResolve(),
    commonjs({
      include: 'node_modules/**'
    }),
    typescript(),
    eslint({
      throwOnError: true, // 抛出异常并阻止打包
      include: ['src/**'],
      exclude: ['node_modules/**']
    }),
    babel({ babelHelpers: 'bundled' })
  ]
};
