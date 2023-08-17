"use client";
import Footer from "./components/Footer";
import ResponsiveAppBar from "./components/ResponsiveAppBar";

export default function RootLayout({
  children, // will be a page or nested layout
}) {
  return (
    <>
      <html lang="en">
      
      <body>  
      <ResponsiveAppBar />
      <div style={{ minHeight: "800px" }}>{children}</div>
      <Footer />
      {/* <Outlet /> */}
      </body>
      </html>
    </>
  );
}
