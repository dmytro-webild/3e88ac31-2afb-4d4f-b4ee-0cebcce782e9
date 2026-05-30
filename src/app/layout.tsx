import type { Metadata } from "next";
import { Halant } from "next/font/google";
import { Inter } from "next/font/google";
import "./globals.css";
import "@/lib/gsap-setup";
import { ServiceWrapper } from "@/components/ServiceWrapper";
import Tag from "@/tag/Tag";
import { getVisualEditScript } from "@/utils/visual-edit-script";
import { Archivo } from "next/font/google";



export const metadata: Metadata = {
  title: 'kingpm08 | Game Developer & Web Creator Portfolio',
  description: 'Official portfolio of kingpm08, a game developer and web creator crafting immersive pixel art games and innovative digital experiences. Explore games, projects, and connect.',
  keywords: ["game developer, web creator, game development, web development, pixel art, indie games, AI projects, portfolio, kingpm08"],
  openGraph: {
    "title": "kingpm08 | Game Developer & Web Creator Portfolio",
    "description": "Official portfolio of kingpm08, a game developer and web creator crafting immersive pixel art games and innovative digital experiences. Explore games, projects, and connect.",
    "url": "https://kingpm08.dev",
    "siteName": "kingpm08 Portfolio",
    "images": [
      {
        "url": "http://img.b2bpic.net/free-photo/anime-car-city_23-2151710936.jpg",
        "alt": "Futuristic pixel art cityscape with neon lights"
      }
    ],
    "type": "website"
  },
  twitter: {
    "card": "summary_large_image",
    "title": "kingpm08 | Game Developer & Web Creator Portfolio",
    "description": "Official portfolio of kingpm08, a game developer and web creator crafting immersive pixel art games and innovative digital experiences. Explore games, projects, and connect.",
    "images": [
      "http://img.b2bpic.net/free-photo/anime-car-city_23-2151710936.jpg"
    ]
  },
  robots: {
    "index": true,
    "follow": true
  },
};

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <ServiceWrapper>
        <body className={`${archivo.variable} antialiased`}>
          <Tag />
          {children}
          <script
              dangerouslySetInnerHTML={{
                  __html: `${getVisualEditScript()}`
              }}
          />
        </body>
      </ServiceWrapper>
    </html>
  );
}
