import type { Metadata } from "next";
import { Footer } from "@/ui/Footer/Footer";
import { Header } from "@/ui/Header/Header";
import "@/styles/scss/global.scss";

export const metadata: Metadata = {
  title: "POLONSKAYA | Ремонт и Дизайн интерьера",
  description:
    "Профессиональный ремонт квартир и домов под ключ в Калининграде. Косметический и капитальный ремонт, отделка помещений, электрика, сантехника и дизайн интерьера. Качественно, надежно и по доступной цене.",
  keywords:
    "Калининград, ремонт квартир, ремонт домов, ремонт офисов, ремонт под ключ, косметический ремонт, капитальный ремонт, отделка помещений, дизайн и ремонт, малярные работы, штукатурка стен, укладка плитки, укладка ламината, сантехнические работы, электромонтажные работы, натяжные потолки, подвесные потолки, стяжка пола, ремонт квартиры цена, ремонт под ключ стоимость, заказать ремонт квартиры, недорогой ремонт, профессиональный ремонт, ремонт с гарантией",
  openGraph: {
    title: "POLONSKAYA | Ремонт и Дизайн интерьера",
    description: "Профессиональный ремонт квартир и домов под ключ в Калининграде",
    url: "https://polonskaya-remont.ru/",
    siteName: "POLONSKAYA-REMONT.RU",
    images: [
      {
        url: "/logo-expanded.webp",
      },
    ],
    locale: "ru_RU",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "POLONSKAYA | Ремонт и Дизайн интерьера",
    description: "Профессиональный ремонт квартир и домов под ключ в Калининграде",
    images: ["/logo-full.webp"],
  },
  themeColor: "rgb(232, 232, 232)",
  viewport: "width=device-width, initial-scale=1.0",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" prefix="og: http://ogp.me/ns#">
      <head>
        <link rel="icon" type="image/svg+xml" href="/logo-small.ico" />
        <link
          rel="preload"
          as="image"
          href="/main/hero.webp"
          fetchPriority="high"
        />
      </head>
      <body>
        <Header />
        {children}
        <Footer />
        <div id="modal"></div>
      </body>
    </html>
  );
}
