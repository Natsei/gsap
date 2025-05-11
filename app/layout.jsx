import React from 'react';
import { Navigation } from "./Navigation";
import { ThemeProvider } from 'next-themes';
import "./globals.css";

export const metadata = {
  title: "Lumos | Donnez vie à votre présence en ligne",
  description: "Création de sites web simples et accessibles pour les débutants, particuliers et petites entreprises.",
  keywords: ["création site web", "site vitrine", "développement web", "site internet", "site professionnel", "site entreprise", "site accessible", "site débutant", "site PME", "agence web France"],
  openGraph: {
    title: "Lumos | Donnez vie à votre présence en ligne",
    description: "Création de sites web simples et accessibles pour les débutants, particuliers et petites entreprises.",
    images: ["/images/og-image.webp"],
  }
};

// Move ThemeProvider to a client component
'use client';
function ClientLayout({ children }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={true}>
      <Navigation />
      {children}
    </ThemeProvider>
  );
}

// Keep RootLayout as a server component
export default function RootLayout({ children }) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}