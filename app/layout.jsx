import Header from "./components/Header";
import "./globals.css";

export const metadata = {
  title: "Maandag - Next.js",
  description: "Oefening met Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
