import SolutionDetails from "@/components/solutions/SolutionDetails";
import { solutionsData } from "@/utils/solutionsData";
import { notFound } from "next/navigation";

export default function SolutionDetailsPage({
  params,
}: {
  params: { slug: string };
}) {
  const solution = solutionsData.find((s) => s?.id === params?.slug);

  if (!solution) {
    notFound();
  }

  return <SolutionDetails solution={solution} />;
}
