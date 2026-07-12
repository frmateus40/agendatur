import type { Metadata } from "next";
import { Inter } from "next/font/google";
import WhatsAppFloatButton from "@/components/WhatsAppFloatButton";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Agendatur | Agencia de Viajes 100% Digital",
  description:
    "Vuelos, hoteles, autos y paquetes turísticos con Agendatur — agencia de viajes 100% digital en Colombia. RNT 279917.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-sans">
        {children}
        <WhatsAppFloatButton />
      </body>
    </html>
  );
}
