import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import VueSetupExtend from "vite-plugin-vue-setup-extend";

//引入node提供的内置的模块path, 可以获取绝对路径
import path from "path";

export default defineConfig({
  plugins: [vue(), VueSetupExtend()],

  //src文件夹配置别名
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
});
