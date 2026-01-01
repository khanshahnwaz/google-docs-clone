interface DocumentIdPageProps {
  params: Promise<{ documentId: string }>;
}

const DocumentIdPage = async ({ params }: DocumentIdPageProps) => {
  const { documentId } = await params;

  return (
    <div className="h-screen w-full flex items-center justify-center">
      <p className="font-mono text-4xl">Document ID: {documentId}</p>
    </div>
  );
};

export default DocumentIdPage;
