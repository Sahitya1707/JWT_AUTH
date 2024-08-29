import { Inter, Kodchasan } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const kodchasan = Kodchasan({ subsets: ["latin"], weight: "400" });

// class handjet = Handjet({sub})

export const metadata = {
  title: "Login/Logout",
  description: "Made By Sahitya",
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={` ${kodchasan.className}`} style={{}}>
        <main className="h-[100vh] bg-gradient-to-r from-[#565655] items-center justify-center flex">
          {children}
        </main>
      </body>
    </html>
  );
}
