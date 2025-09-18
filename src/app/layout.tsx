import './globals.css'
import {Header, Footer} from "@layouts";
import {ScrollToTopButton} from "@ui";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Header />
  {children}
  <ScrollToTopButton />
  <Footer />
      </body>
    </html>
  );
}