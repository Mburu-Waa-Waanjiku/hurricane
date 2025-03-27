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