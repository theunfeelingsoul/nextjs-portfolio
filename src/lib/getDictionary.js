import "server-only";
import en from "../../public/locales/en/common.json";
import ja from "../../public/locales/ja/common.json";

const dictionaries = {
  en,
  ja,
};

export async function getDictionary(locale) {
  return dictionaries[locale] || dictionaries.en;
}
