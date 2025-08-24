import { UploadPdf } from "./_components/UploadPdf";

async function handlePdfUpload(formData: FormData) {
  "use server";
  const file = formData.get("pdf") as File;
  if (file) {
    console.log("PDF uploaded:", file.name, file.size);
    const response = await fetch("/generate-quiz", {
      method: "POST",
      body: formData,
    });
    console.log("Response from API:", response);
  }
}

export default function PdfQuixPage() {
  return (
    <>
      <div className="flex flex-col items-center">
        <UploadPdf onUpload={handlePdfUpload} />
      </div>
    </>
  );
}
