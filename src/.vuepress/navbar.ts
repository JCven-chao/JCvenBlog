import {navbar} from "vuepress-theme-hope";

export default navbar([
  {
    text: "主页",
    icon: "home",
    link: "/",
  },

  {
    text: "我的笔记",
    icon: "book",
    link: "/note/",
  },

  {
    text: "我的随笔",
    icon: "pen-to-square",
    link: "/essay/",
  },

  {
    text: "开源项目",
    icon: "laptop-code",
    link: "/project/",
  },

  {
    text: "实用工具",
    icon: "gears",
    link: "/tool/",
  },

  {
    text: "如何使用",
    icon: "gears",
    link: "/demo/",
  },
  {
    text: "教程文档",
    icon: "book",
    link: "https://theme-hope.vuejs.press/zh/",
  },

  {
    text: "关于作者",
    icon: "user",
    link: "/user/",
  },
]);
