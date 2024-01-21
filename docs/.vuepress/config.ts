import { defineConfig } from "vuepress/config";
import plugins from "./configs/plugins";
import theme from "./configs/theme";
import head from "./configs/head";
import { title } from "./constants";

export default defineConfig({
  title,
  // description: "贴心的编程学习路线，全面的编程知识百科",
  head,
  permalink: "/:slug",

  // 监听文件变化，热更新
  extraWatchFiles: [
    ".vuepress/constants/index.ts",
    ".vuepress/config.ts",
    ".vuepress/configs/*.ts",
    ".vuepress/configs/sidebar/*.ts",
    ".vuepress/configs/sidebar/sidebars.ts",
  ],
  markdown: {
    // 开启代码块的行号
    lineNumbers: true,
    // 支持 4 级以上的标题渲染
    extractHeaders: ["h2", "h3", "h4", "h5", "h6"],
  },
  // @ts-ignore
  plugins,
  // 主题配置
  themeConfig: theme,
});
