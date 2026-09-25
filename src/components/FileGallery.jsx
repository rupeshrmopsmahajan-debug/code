"use client";

import { FileIcon, ExternalLinkIcon } from "lucide-react";

export default function FileGallery({ files }) {
  // Render placeholder if no files exist
  if (!files || files.length === 0) {
    return (
      <div className="text-center py-12 border border-dashed border-neutral-200 rounded-lg">
        <p className="text-sm font-medium text-neutral-600">No files uploaded yet.</p>
        <p className="text-xs text-neutral-400 mt-1">
          Drop files above to start saving them to your drive.
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {files.map((file) => (
        <div
          key={file.id || file.s3_key}
          className="p-4 border border-neutral-200 rounded-lg bg-white flex items-center justify-between hover:border-black transition"
        >
          <div className="flex items-center gap-3 overflow-hidden">
            <div className="p-2 border border-neutral-200 rounded bg-neutral-50 text-black shrink-0">
              <FileIcon className="size-5" />
            </div>
            <div className="truncate">
              <p className="font-medium text-xs text-black truncate">
                {file.name}
              </p>
              <p className="text-[11px] text-neutral-400 mt-0.5">
                {(file.size / (1024 * 1024)).toFixed(2)} MB
              </p>
            </div>
          </div>

          <a
            href={file.s3_key}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 border border-neutral-200 rounded text-neutral-600 hover:text-black hover:border-black transition shrink-0 ml-2"
            title="Open File"
          >
            <ExternalLinkIcon className="size-3.5" />
          </a>
        </div>
      ))}
    </div>
  );
}