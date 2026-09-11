import "./globals.css";
import Header from "../components/organisms/Header";
import Footer from "../components/organisms/Footer";

export const metadata = {
  title:
    "Lakbay Pangasinan | Discover. Experience. Remember.",
  description:
    "Discover beaches, nature, culture, history, and agricultural destinations across Pangasinan.",
};

export default function RootLayout({
  children,
}) {
  return (
    <html lang="en">
      <body>
        <Header />

        {children}

        <Footer />
      </body>
    </html>
  );
}