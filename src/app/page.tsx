import Header from "@/components/Header";
import HeroCarousel from "@/components/HeroCarousel";
import SearchWidget from "@/components/search/SearchWidget";
import PackagesGrid from "@/components/PackagesGrid";
import TrustStrip from "@/components/TrustStrip";
import CategoryExplorer from "@/components/categories/CategoryExplorer";
import TipsSection from "@/components/TipsSection";
import AboutSection from "@/components/AboutSection";
import Footer from "@/components/Footer";
import { SearchTabProvider } from "@/contexts/SearchTabContext";

export default function Home() {
  return (
    <SearchTabProvider>
      <div className="flex min-h-screen flex-col bg-white">
        <Header />
        <main className="flex-1">
          <HeroCarousel />
          <SearchWidget />
          <PackagesGrid />
          <TrustStrip />
          <CategoryExplorer />
          <TipsSection />
          <AboutSection />
        </main>
        <Footer />
      </div>
    </SearchTabProvider>
  );
}
