import { createUploadthing } from "uploadthing/next";
import { UploadThingError } from "uploadthing/server";
import { auth } from "@clerk/nextjs/server";
import sql from "@/src/lib/db";

const f = createUploadthing();

// Define File Router endpoints and upload middleware
export const ourFileRouter = {
  fileUploader: f({
    blob: { maxFileSize: "32MB", maxFileCount: 10 },
  })
    // Middleware executes on the server before upload starts
    .middleware(async () => {
      // Authenticate user with Clerk
      const { userId } = await auth();
      if (!userId) throw new UploadThingError("Unauthorized");

      // Pass user ID to upload context
      return { userId };
    })
    // Executed on the server after the upload finishes
    .onUploadComplete(async ({ metadata, file }) => {
      // Extract file details safely
      const fileName = file.name || "Untitled File";
      const fileSize = file.size || 0;
      const fileType = file.type || "application/octet-stream";
      const fileUrl = file.url || file.ufsUrl;

      // Insert upload metadata into database
      await sql`
        INSERT INTO files (name, size, type, s3_key, user_id)
        VALUES (
          ${fileName}, 
          ${fileSize}, 
          ${fileType}, 
          ${fileUrl}, 
          ${metadata.userId}
        );
      `;

      return { uploadedBy: metadata.userId };
    }),
};