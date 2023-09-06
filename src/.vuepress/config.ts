import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  lang: "zh-CN",
  title: "JCvenBlog",
  description: "我的个人博客",

  theme,

  // Enable it with pwa
  // shouldPrefetch: false,
});
