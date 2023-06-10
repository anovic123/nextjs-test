import { Header } from '@/components/header';
import { Sidebar } from '@/components/sidebar';

import './globals.scss';

export const metadata = {
  title: 'Cabinet',
  description: 'Generated by create next app',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <div className="wrapper">
          <div className="container">
            <Sidebar />
            <div className="body">{children}</div>
            {/* Footer */}
          </div>
        </div>
      </body>
    </html>
  );
}
