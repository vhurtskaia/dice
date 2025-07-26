'use client'

import { Roboto } from 'next/font/google'
import {Provider} from "react-redux";
import {store} from "@/app/store";

import "./globals.css";

const roboto = Roboto({
    subsets: ['latin'],
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={roboto.className}>
      <Provider store={store}>
          {children}
      </Provider>
      </body>
    </html>
  );
}
