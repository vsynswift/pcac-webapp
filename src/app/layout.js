
import localFont from 'next/font/local'
import "./globals.css";
import DefaultHeader from './(pages)/components/header/defaultHeader';
import Footer from './(pages)/components/footer/footer';
import { ThemeModeScript } from "flowbite-react";
const opensans = localFont({
  
  src: [
    {
      path: '/assets/fonts/opensans/OpenSans-Light.ttf',
      weight: '300',
      style: 'light'
    },
    {
      path: '/assets/fonts/opensans/OpenSans-Regular.ttf',
      weight: '400',
      style: 'normal'
    },
    {
      path: '/assets/fonts/opensans/OpenSans-SemiBold.ttf',
      weight: '600',
      style: 'semibold'
    },
    {
      path: '/assets/fonts/opensans/OpenSans-Bold.ttf',
      weight: '700',
      style: 'bold'
    },
    {
      path: '/assets/fonts/opensans/OpenSans-ExtraBold.ttf',
      weight: '800',
      style: 'extrabold'
    }
  ],
  variable: '--font-opensans',
})


export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (

    <html lang="en">
      <head>
        <ThemeModeScript />
      </head>
      <body className={`${opensans.variable} font-sans`}>
      <DefaultHeader />
      {children} 
      <Footer />
      </body>
      
    </html>
    
  );
  
}

