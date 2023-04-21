import React from 'react';
import { Link } from 'react-router-dom';
import LoginButton from './LoginButton';

export default function Header() {
  return (
    <header className="w-full bg-stone-300 flex justify-between items-center p-4">
      <section className="flex items-center gap-5">
        <h1 className="text-3xl">uManage</h1>
        <p>Making property management easier.</p>
      </section>
      <ul className="flex gap-4">
        <li>
          <Link to="/">Home</Link>
        </li>
        <LoginButton />
      </ul>
    </header>
  );
}
