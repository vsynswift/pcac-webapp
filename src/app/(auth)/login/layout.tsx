import localFont from 'next/font/local'
import "../../../app/globals.css";
const opensans = localFont({
  
  src: [
    {
      path: '../../assets/fonts/opensans/OpenSans-Light.ttf',
      weight: '300',
      style: 'light'
    },
    {
      path: '../../assets/fonts/opensans/OpenSans-Regular.ttf',
      weight: '400',
      style: 'normal'
    },
    {
      path: '../../assets/fonts/opensans/OpenSans-SemiBold.ttf',
      weight: '600',
      style: 'semibold'
    },
    {
      path: '../../assets/fonts/opensans/OpenSans-Bold.ttf',
      weight: '700',
      style: 'bold'
    },
    {
      path: '../../assets/fonts/opensans/OpenSans-ExtraBold.ttf',
      weight: '800',
      style: 'extrabold'
    }
  ],
  variable: '--font-opensans',
})





export const metadata = {
  title: 'Next.js',
  description: 'Generated by Next.js',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${opensans.variable} font-sans`}>{children}</body>
    </html>
  )
}
