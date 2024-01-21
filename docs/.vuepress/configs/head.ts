import { HeadTags } from "vuepress/config";
export default <HeadTags>[
  // 站点图标
  ["link", { rel: "icon", href: "/favicon.ico" }],
  // SEO
  [
    "meta",
    {
      name: "keywords",
      content:
        "程序员鱼皮, 编程学习路线, 编程知识百科, Java, 编程导航, 前端, 开发, 编程分享, 项目, IT, 求职, 面经",
    },
  ],
  // 百度统计
  [
    "script",
    {},
    `
            var _hmt = _hmt || [];
            (function() {
              var hm = document.createElement("script");
              hm.src = "https://hm.baidu.com/hm.js?2675818a983a3131404cee835018f016";
              var s = document.getElementsByTagName("script")[0]; 
              s.parentNode.insertBefore(hm, s);
            })();
          `,
  ],
];
