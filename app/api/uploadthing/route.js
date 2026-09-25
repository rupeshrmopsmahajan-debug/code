import { createRouteHandler } from "uploadthing/next";
import { ourFileRouter } from "./core";

// Create and export Next.js API route handler for UploadThing
export const { GET, POST } = createRouteHandler({
  router: ourFileRouter,
});