import Header from '../components/Header';
import ChatBox from '../components/ChatBox';
import { StateProvider } from '../utils/StateContext';
import '../styles/globals.css';
import ContactInfo from '@/components/ContactInfo';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="google-site-verification" content="ehyifMyuzZjrrJmMdqaTCAsoDerpHiSeejh92XkAQPI" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0" />
        <link rel="preload" href="/fonts/Humane-Bold.otf" as="font" type="font/otf" crossOrigin="anonymous" />
      </head>
      <body>
        <StateProvider>
          {children}
          <ChatBox />
          <ContactInfo/>
        </StateProvider>
      </body>
    </html>
  );
}