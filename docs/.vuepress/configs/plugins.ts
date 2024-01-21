import { author, domain, tags } from "../constants";
export default [
  ["@vuepress/back-to-top"],
  // Google 分析
  [
    "@vuepress/google-analytics",
    {
      ga: "GTM-WVS9HM6W", // 补充自己的谷歌分析 ID，比如 UA-00000000-0
    },
  ],
  ["@vuepress/medium-zoom"],
  // https://github.com/lorisleiva/vuepress-plugin-seo
  [
    "seo",
    {
      siteTitle: (_, $site) => $site.title,
      title: ($page) => $page.title,
      description: ($page) =>
        $page.frontmatter.description || $page.description,
      author: (_, $site) => $site.themeConfig.author || author,
      tags: ($page) => $page.frontmatter.tags || tags,
      type: ($page) => "article",
      url: (_, $site, path) =>
        ($site.themeConfig.domain || domain || "") + path,
      image: ($page, $site) =>
        $page.frontmatter.image &&
        (($site.themeConfig.domain &&
          !$page.frontmatter.image.startsWith("http")) ||
          "") + $page.frontmatter.image,
      publishedAt: ($page) =>
        $page.frontmatter.date && new Date($page.frontmatter.date),
      modifiedAt: ($page) => $page.lastUpdated && new Date($page.lastUpdated),
    },
  ],
  // https://github.com/ekoeryanto/vuepress-plugin-sitemap
  [
    "sitemap",
    {
      hostname: domain,
    },
  ],
  // https://github.com/IOriens/vuepress-plugin-baidu-autopush
  ["vuepress-plugin-baidu-autopush"],
  // https://github.com/zq99299/vuepress-plugin/tree/master/vuepress-plugin-tags
  ["vuepress-plugin-tags"],
  // https://github.com/znicholasbrown/vuepress-plugin-code-copy
  [
    "vuepress-plugin-code-copy",
    {
      successText: "代码已复制",
    },
  ],
  // https://github.com/webmasterish/vuepress-plugin-feed
  [
    "feed",
    {
      canonical_base: domain,
      count: 10000,
      // 需要自动推送的文档目录
      posts_directories: [],
    },
  ],
  // https://github.com/tolking/vuepress-plugin-img-lazy
  ["img-lazy"],
  [
    "vuepress-plugin-auto-sidebar",
    {
      nav: true,
    },
  ],
];
