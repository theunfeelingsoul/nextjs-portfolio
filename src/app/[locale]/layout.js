// src/app/[locale]/layout.js
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export const metadata = {
  title: "Portfolio",
  description: "Full-stack developer & designer portfolio",
  openGraph: {
    images: ["/preview.png"],
  },
};

export default async function LocaleLayout({ children, params }) {
  const { locale } = await params
  return (
    <>
      <Navbar locale={locale} />
      <main className="p-6">{children} </main>
      <Footer />
    </>
  );
}
