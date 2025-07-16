import SolutionDetails from "@/components/solutions/SolutionDetails";
import { solutionsData } from "@/utils/solutionsData";
import { notFound } from "next/navigation";

type Props = {
  params: {
    slug: string;
  };
};
// @ts-expect-error
export default function SolutionDetailsPage({ params }: Props) {
  const solution = solutionsData.find((s) => s?.id === params?.slug);

  if (!solution) {
    notFound();
  }

  return <SolutionDetails solution={solution} />;
}
