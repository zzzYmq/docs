import { NavItem } from "vuepress/config";
const IELTS_Parts = ["词汇", "听力", "阅读", "写作", "口语"];
const IELTS_Items = IELTS_Parts.map((part) => ({
  text: part,
  link: `/雅思/${part}`,
}));
export default [
  {
    text: "雅思",
    items: IELTS_Items,
  },
] as NavItem[];
