// app/datepicker/layout.jsx

import './globals.css';  // Import global styles
import { Roboto } from 'next/font/google';  // Example of importing Google Fonts

// Load a font from Google Fonts (optional)
const roboto = Roboto({
  weight: ['400', '500', '700'],
  subsets: ['latin'],
});

export const metadata = {
  title: 'Date Picker',
  description: 'A reusable date picker component with recurring date selection',
};

export default function DatePickerLayout({ children }) {
  return (
    <html lang="en" className={roboto.className}>
      <body className="bg-background text-text">
        <div className="min-h-screen bg-background text-text">
          <header className="p-4 bg-primary text-white">
            <h1 className="text-xl font-bold">Date Picker</h1>
          </header>
          <main className="p-6">
            {children}
          </main>
          <footer className="p-4 bg-primary text-white mt-4 text-center">
            <p>© 2024 Anirudh Das</p>
          </footer>
        </div>
      </body>
    </html>
  );
}
