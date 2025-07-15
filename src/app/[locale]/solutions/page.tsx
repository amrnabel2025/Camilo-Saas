"use client";
import Solutions from "@/components/solutions/Solutions";
import { useTranslations } from "next-intl";

export default function SolutionsPage() {
  const t = useTranslations("Solutions");

  return <Solutions t={t} />;
}
