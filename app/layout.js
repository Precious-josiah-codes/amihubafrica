import "./globals.css";
import { Inter, Playfair_Display } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
const playfair_display = Playfair_Display({ subsets: ["latin"] });

export const metadata = {
  title: "Amihub",
  description:
    "Africa Manufacturing Innovation Hub (AMI Hub) is a technology driven business incubator that is established to create a platform for new and existing businesses, entrepreneurs, inventors and innovators to connect and create business solutions by providing enabling technologies, business advisory and networking.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
