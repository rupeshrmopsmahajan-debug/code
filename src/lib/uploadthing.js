"use client";

// Import UploadThing helper generators for Next.js React components
import {
  generateUploadButton,
  generateUploadDropzone,
} from "@uploadthing/react";

// Export client components for file uploading
export const UploadButton = generateUploadButton();
export const UploadDropzone = generateUploadDropzone();