import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import sql from "@/src/lib/db";
import FileGallery from "@/src/components/FileGallery";
import FileUpload from "@/src/components/FileUpload";
import Link from "next/link";

export default async function DashboardPage() {
  // Authenticate user on server side
  const { userId } = await auth();

  if (!userId) {
    redirect("/");
  }

  // Fetch files belonging to logged-in user
  const files = await sql`
    SELECT id, name, size, type, s3_key, created_at 
    FROM files 
    WHERE user_id = ${userId} 
    ORDER BY id DESC
  `;

  return (
    <div className="min-h-screen bg-white">
      {/* Top Header Navigation */}
      <header className="border-b border-neutral-200 bg-white">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/" className="font-bold text-black tracking-tight">
            FileVerse Drive
          </Link>
          <span className="text-xs border border-neutral-200 rounded px-2.5 py-1 text-neutral-600">
            User: {userId.substring(0, 12)}...
          </span>
        </div>
      </header>

      {/* Main Dashboard Content */}
      <main className="max-w-6xl mx-auto px-6 py-10">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-black tracking-tight">
            Your Storage
          </h1>
          <p className="text-sm text-neutral-500 mt-1">
            Upload, view, and manage your uploaded files.
          </p>
        </div>

        {/* Upload Component */}
        <FileUpload />

        {/* File List Gallery */}
        <div className="mt-10">
          <h2 className="text-lg font-semibold text-black mb-4">
            Uploaded Files
          </h2>
          <FileGallery files={files} />
        </div>
      </main>
    </div>
  );
}