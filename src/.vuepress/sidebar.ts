import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/": [
    {
      text: "我的随笔",
      icon: "book",
      prefix: "essay/",
      children: "structure",
    },

    "intro",
  ],

  "/temp/": [
    {
      text: "temp",
      icon: "book",
      children: "structure",
    },
  ],

  "/demo/":[
    {
      text: "如何使用",
      icon: "laptop-code",
      children: "structure",
    },
  ],
  //笔记侧边栏
  "/note/": [
    {
      text: "笔记目录",
      icon: "book",
      link: "/note",

      children: [
        {
          text: "JavaSE笔记",
          icon: "book",
          prefix: "/note/java",
          collapsible: true,
          children: [
            "JavaNote2",
            "JavaNote1",
          ],
        },

        {
          text: "MySQL笔记",
          icon: "book",
          prefix: "/note/mysql",
          collapsible: true,
          children: [
            "MySQLNote",
          ],
        },

      ],
    },
  ]
});
