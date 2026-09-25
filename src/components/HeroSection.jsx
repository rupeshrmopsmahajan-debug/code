import Link from "next/link";
import { Show,   SignUpButton } from "@clerk/nextjs";

export default function HeroSection() {
  return (
    <section className="py-24 px-6 text-center max-w-4xl mx-auto">
      <div className="inline-block border border-neutral-200 bg-neutral-50 px-3 py-1 rounded-full text-xs font-medium text-neutral-600 mb-6">
        Secure & Fast Cloud Storage
      </div>

      <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-black mb-6 leading-tight">
        Store, manage, and share.
      </h1>

      <p className="text-lg text-neutral-600 mb-8 max-w-2xl mx-auto leading-relaxed">
        FileVerse offers streamlined cloud file management with robust.
      </p>

      <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
        <Show when="signed-out">
          <SignUpButton mode="modal">
            <button className="w-full sm:w-auto bg-black text-white font-medium text-sm px-6 py-3 rounded-md border border-black hover:bg-neutral-800 transition cursor-pointer">
              Start Storing Free
            </button>
          </SignUpButton>
        </Show>

        <Show when="signed-in">
          <Link
            href="/dashboard"
            className="w-full sm:w-auto bg-black text-white font-medium text-sm px-6 py-3 rounded-md border border-black hover:bg-neutral-800 transition"
          >
            Go to Drive
          </Link>
        </Show>

        <a
          href="#docs"
          className="w-full sm:w-auto border border-neutral-300 bg-white text-neutral-800 font-medium text-sm px-6 py-3 rounded-md hover:border-black transition"
        >
          Read Documentation
        </a>
      </div>
    </section>
  );
}
