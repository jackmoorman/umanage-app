import React from 'react';
import Header from '../components/Header';
import { Outlet } from 'react-router';

export default function RootLayout() {
  return (
    <main className="bg-stone-200 min-h-screen w-full">
      <Header />
      <Outlet />
    </main>
  );
}
