"use client";

import { useRouter } from "next/navigation";
import { UploadDropzone } from "@/src/lib/uploadthing";

export default function FileUpload() {
  const router = useRouter();

  return (
    <div className="p-6 bg-white border border-neutral-200 rounded-lg shadow-xs">
      <h2 className="text-sm font-semibold text-neutral-800 mb-4">
        Upload Files
      </h2>
      <UploadDropzone
        endpoint="fileUploader"
        onClientUploadComplete={() => {
          // Refresh Server Component route to render new files
          router.refresh();
        }}
        onUploadError={(error) => {
          alert(`Upload failed: ${error.message}`);
        }}
     
      />
    </div>
  );
}