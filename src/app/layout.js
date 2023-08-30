'use client';
import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp';
import Footer from "./components/Footer";
import ResponsiveAppBar from "./components/ResponsiveAppBar";
import Button from "./components/Button";
import scrollToTop from "./helpers/scrolltotop";

export const metadata = {
  title: "Wiki Code",
};

// const isBrowser = () => typeof window !== 'undefined'; //The approach recommended by Next.js

// function scrollToTop() {
//     if (!isBrowser()) return;
//     window.scrollTo({ top: 0, behavior: 'smooth' });
// }
export default function RootLayout({
  children, // will be a page or nested layout
}) 

{
  return (
    <>
      <html lang="en">
      <body>  
      
         <ResponsiveAppBar />  
     
      <div style={{ minHeight: "800px" }}>{children}</div>
      <Button buttonText={"Scroll to top"} onClick={scrollToTop}>
        <ArrowCircleUpIcon />
      </Button>
      <Footer />    
      </body>
      </html>
    </>
  );
}
