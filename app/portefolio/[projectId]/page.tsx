import { antesDepoisImages } from "../../../data/antesdepoisImages";
import ProjectDetailsClient from "./ProjectDetailsClient";

export async function generateStaticParams() {
  return antesDepoisImages.map((p) => ({
    projectId: String(p.id),
  }));
}

export const dynamicParams = false;

type Props = {
  params: Promise<{ projectId: string }>;
};

export default async function ProjectDetailsPage({ params }: Props) {
  const { projectId } = await params;
  return <ProjectDetailsClient projectId={projectId} />;
}
