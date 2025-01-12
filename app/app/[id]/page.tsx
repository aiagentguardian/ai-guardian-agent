import { AnalysisResult } from '@/components/AnalysisResult';

export default function AnalysisPage({ params }: { params: { id: string } }) {
  return <AnalysisResult id={params.id} />;
}