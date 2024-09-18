import { Poppins } from "next/font/google";
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

import HubSidebar from "@/components/Header/Siderbar/HubSidebar";
import HubNavbar from "@/components/Header/Navbar/HubNavbar";

export const metadata = {
  title: "Hub Dashboard",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <div>
          {/* <HubNavbar /> */}
          <div className="flex bg-gray-100 min-h-screen">
            <HubSidebar />
            <div className="flex-grow container mx-3 p-4">
              <div className="mb-5 ">
                <HubNavbar />
              </div>
              {children}
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
