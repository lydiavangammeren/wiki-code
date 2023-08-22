// "use client";
import Head from 'next/head'
import Footer from "./components/Footer";
import ResponsiveAppBar from "./components/ResponsiveAppBar";

export const metadata = {
  title: "Wiki Code",
};

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
      </body>
      </html>
    </>
  );
}
