'use client';

import React from 'react';
import { Navigation } from "./Navigation";
import { ThemeProvider } from 'next-themes';

export function ClientLayout({ children }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={true}>
      <Navigation />
      {children}
    </ThemeProvider>
  );
}