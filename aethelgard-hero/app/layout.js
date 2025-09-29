import "./globals.css";
import {
  Cinzel_Decorative,
  Italianno,
  EB_Garamond,
  Lato,
} from "next/font/google";

const cinzel = Cinzel_Decorative({
  subsets: ["latin"],
  weight: "700",
  variable: "--font-cinzel",
});

const italianno = Italianno({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-italianno",
});

const garamond = EB_Garamond({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-garamond",
});

const lato = Lato({
  subsets: ["latin"],
  weight: "700",
  variable: "--font-lato",
});

export const metadata = {
  title: "Aethelgard",
  description:
    "A fantastical architectural saga carved in the skies, inspired by magical Indian temples.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${cinzel.variable} ${italianno.variable} ${garamond.variable} ${lato.variable} antialiased bg-[#0c0a09] text-white/90`}
      >
        {children}
      </body>
    </html>
  );
}
