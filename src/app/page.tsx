import type { Metadata } from "next";
import Header from "@/components/Header";
import HeroCarousel from "@/components/HeroCarousel";
import SearchWidget from "@/components/search/SearchWidget";
import PackagesGrid from "@/components/PackagesGrid";
import TrustStrip from "@/components/TrustStrip";
import CategoryExplorer from "@/components/categories/CategoryExplorer";
import TipsSection from "@/components/TipsSection";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Agendatur — Agencia de viajes digital en Colombia",
  description:
    "Cotiza vuelos, hoteles, autos, tours y paquetes turísticos todo incluido con Agendatur, agencia de viajes 100% digital en Colombia. RNT 279917.",
  alternates: { canonical: "/" },
};

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Header />
      <main className="flex-1">
        <HeroCarousel />
        <SearchWidget />
        <PackagesGrid />
        <TrustStrip />
        <CategoryExplorer />
        <TipsSection />
      </main>
      <Footer />
    </div>
  );
}
