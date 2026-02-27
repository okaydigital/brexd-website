import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "BREXD | Comércio Global, Engenharia e Tecnologia",
  description:
    "Empresa multinacional conectando Brasil, EUA e China através de soluções integradas em exportação, importação, engenharia, agronegócio e tecnologia.",
  icons: { icon: "/favicon.ico" },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
