"use client";
import SolutionDetails from "@/components/solutions/SolutionDetails";
import { solutionsData } from "@/utils/solutionsData";
import { useTranslations } from "next-intl";
import { notFound } from "next/navigation";

export default function SolutionDetailsPage({
  params,
}: {
  params: { slug: string };
}) {
  const t = useTranslations();
  const solution = solutionsData.find((s) => s?.id === params?.slug);

  console.log("🚀 ~ :15 ~ solution:", solution);

  if (!solution) {
    notFound();
  }

  return <SolutionDetails solution={solution} />;
}
