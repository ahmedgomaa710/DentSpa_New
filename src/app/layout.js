import "./globals.css";

// component layout
import NavBer from "@/components/navBer/NavBer";
import Hero from "@/components/hero/Hero";

export const metadata = {
  title: "DentSpa",
  description:
    "Here in DentSpa® we put your interests first. Our mission is to provide you with the safest and highest-quality options to choose from. We take your needs very seriously. Our staff are hand-selected based on strict qualification criteria and are subject to constant quality control through DentSpa®.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="body">
        <NavBer />
        <Hero />
        <div className="main-container">
          <main className="app">
            <div className="content_app">{children}</div>
          </main>
        </div>
      </body>
    </html>
  );
}
