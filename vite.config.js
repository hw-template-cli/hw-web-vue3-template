/*
 * @Description:
 * @Author: weiyang
 * @Date: 2022-02-08 14:58:42
 * @LastEditors: weiyang
 * @LastEditTime: 2022-08-25 16:13:41
 */
import { defineConfig, loadEnv } from "vite";
import vue from "@vitejs/plugin-vue";
import { uglify } from "rollup-plugin-uglify";
import path from "path";
import { createSvgIconsPlugin } from "vite-plugin-svg-icons";
function resolve(dir) {
  return path.join(__dirname, dir);
}

// https://vitejs.dev/config/
export default ({ mode }) => {
  process.env = {
    ...process.env,
    ...loadEnv(mode, process.cwd())
  };
  return defineConfig({
    base: process.env.NODE_ENV === "production" ? "/" : "/",
    plugins: [
      vue(),
      createSvgIconsPlugin({
        // 配置你存放 svg 图标的目录
        iconDirs: [path.resolve(process.cwd(), "src/assets/icons/svg")],
        // 定义 symbolId 格式
        symbolId: "icon-[dir]-[name]"
      })
    ],
    build: {
      rollupOptions: {
        plugins: [
          {
            ...uglify({
              compress: {
                // eslint-disable-next-line camelcase
                drop_console: false,
                // eslint-disable-next-line camelcase
                drop_debugger: false
              }
            })
          }
        ]
      }
    },
    resolve: {
      alias: {
        "@": resolve("src")
      }
    },
    css: {
      preprocessorOptions: {
        scss: {
          // additionalData: `$injectedColor: orange;`
          additionalData: `@import "@/assets/style/common.scss";`
        }
      }
    },
    clearScreen: false,
    server: {
      host: process.env.VITE_APP_HOST,
      port: process.env.VITE_APP_PORT,
      open: false,
      proxy: {
        "/mock": {
          target: process.env.VITE_APP_MOCK_API,
          changeOrigin: true,
          // eslint-disable-next-line no-shadow
          rewrite: path => path.replace(/^\/mock/, "")
        },
        "/api": {
          target: process.env.VITE_APP_API,
          changeOrigin: true
        }
      }
    }
  });
};
