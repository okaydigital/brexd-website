import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales: ["pt-BR", "en", "zh"],
  defaultLocale: "pt-BR",
  localePrefix: "as-needed",
});
