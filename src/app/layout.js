import Header from "./componenets/Header";
import "./globals.css";
import {DM_Sans} from "next/font/google"
export const metadata = {
  title: "Coffee Listing",
  description: "Browse our curated collection of unique and tasty coffee blends.",
  keywords: ["coffee", "products", "nextjs", "listing"],
  authors: [{ name: "Gebraiel" }]
};
const dmsans = DM_Sans({ subsets: ['latin'] })

export default function RootLayout({ children }) {
  return (
    <html lang="en">

      <body
        className={`grid grid-rows-[auto_1fr] min-h-screen bg-black text-base ${dmsans.className}`}
      >
        <Header/>
        <main className="flex justify-center items-center bg-black ">
          {children}
        </main>
      </body>
      
    </html>
  );
}
