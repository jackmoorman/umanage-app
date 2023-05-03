import React from 'react';
import { Outlet } from 'react-router';

export default function DashboardLayout(): JSX.Element {
  return (
    <main>
      <h1>Dashboard</h1>
      <Outlet />
    </main>
  );
}
