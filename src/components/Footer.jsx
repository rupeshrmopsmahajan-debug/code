import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-neutral-200 bg-white py-8 px-6 text-sm text-neutral-500">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p>© {new Date().getFullYear()} FileVerse. All rights reserved.</p>
        <div className="flex items-center space-x-6">
          <Link href="#" className="hover:text-black transition">
            Privacy Policy
          </Link>
          <Link href="#" className="hover:text-black transition">
            Terms of Service
          </Link>
        </div>
      </div>
    </footer>
  );
}