"use client";
import { Button } from "@/components/ui/button";
import {
  FileUpload,
  FileUploadDropzone,
  FileUploadItem,
  FileUploadItemDelete,
  FileUploadItemMetadata,
  FileUploadItemPreview,
  FileUploadList,
  FileUploadTrigger,
} from "@/components/ui/file-upload";
import { Upload, X } from "lucide-react";
import * as React from "react";
import { toast } from "sonner";

interface UploadPdfProps {
  onUpload: (formData: FormData) => Promise<void>;
}

export function UploadPdf({ onUpload }: UploadPdfProps) {
  const [files, setFiles] = React.useState<File[]>([]);

  const onFileValidate = React.useCallback(
    (file: File): string | null => {
      if (files.length > 1) {
        return "You can only upload 1 file at a time";
      }
      if (!file.type.startsWith("application/pdf")) {
        return "Only PDF files are allowed";
      }
      const MAX_SIZE = 2 * 1024 * 1024;
      if (file.size > MAX_SIZE) {
        return `File size must be less than ${MAX_SIZE / (1024 * 1024)}MB`;
      }
      return null;
    },
    [files]
  );

  const onFileReject = React.useCallback((file: File, message: string) => {
    toast.error(message, {
      description: `"${
        file.name.length > 20 ? `${file.name.slice(0, 20)}...` : file.name
      }" has been rejected`,
    });
  }, []);

  const handleUpload = async () => {
    if (files.length === 0) {
      toast.error("Please select a PDF file first");
      return;
    }

    const formData = new FormData();
    formData.append("pdf", files[0]);

    try {
      await onUpload(formData);
      toast.success("PDF uploaded successfully!");
      setFiles([]);
    } catch (error) {
      toast.error("Upload failed. Please try again.");
    }
  };

  return (
    <div className="w-full max-w-md space-y-4">
      <FileUpload
        value={files}
        onValueChange={setFiles}
        onFileValidate={onFileValidate}
        onFileReject={onFileReject}
        accept="application/pdf"
        maxFiles={1}
        className="w-full"
        multiple={false}
      >
        <FileUploadDropzone>
          <div className="flex flex-col items-center gap-1">
            <div className="flex items-center justify-center rounded-full border p-2.5">
              <Upload className="size-6 text-muted-foreground" />
            </div>
            <p className="font-medium text-sm">Drag & drop files here</p>
            <p className="text-muted-foreground text-xs">
              Or click to browse (max 1 file)
            </p>
          </div>
          <FileUploadTrigger asChild>
            <Button variant="outline" size="sm" className="mt-2 w-fit">
              Browse files
            </Button>
          </FileUploadTrigger>
        </FileUploadDropzone>

        <FileUploadList>
          {files.map((file) => (
            <FileUploadItem key={file.name} value={file}>
              <FileUploadItemPreview />
              <FileUploadItemMetadata />
              <FileUploadItemDelete asChild>
                <Button variant="ghost" size="icon" className="size-7">
                  <X />
                </Button>
              </FileUploadItemDelete>
            </FileUploadItem>
          ))}
        </FileUploadList>
      </FileUpload>

      {files.length > 0 && (
        <Button onClick={handleUpload} className="w-full">
          Upload PDF
        </Button>
      )}
    </div>
  );
}
