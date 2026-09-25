import Navbar from "@/src/components/Navbar";
import Footer from "@/src/components/Footer";

export default function MarketingLayout({ children }) {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Navbar />
      <main className="flex-1 max-w-7xl mx-auto w-full">{children}</main>
      <Footer />
    </div>
  );
}