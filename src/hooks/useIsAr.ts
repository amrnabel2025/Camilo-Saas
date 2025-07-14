import { useLocale } from "next-intl";

export function useIsAr() {
  const locale = useLocale();
  return locale === "ar";
}
