import Header from '../components/Header';
import ChatBox from '../components/ChatBox';
import { StateProvider } from '../utils/StateContext';
import '../styles/globals.css';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <StateProvider>
          <Header />
          {children}
          <ChatBox />
        </StateProvider>
      </body>
    </html>
  );
}