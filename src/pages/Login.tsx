import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const inputStyles = 'shadow-md shadow-slate-400 rounded mb-7 p-2';

  async function handleLogin(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsLoading(true);
    const userAuth = await fetch('/api/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password }),
    });
    const res = await userAuth.json();
    console.log(res);
    setIsLoading(false);
  }

  return (
    <main className="bg-slate-300 min-h-screen w-full flex justify-center">
      {isLoading ? (
        <h1 className="text-3xl mt-16">Loading...</h1>
      ) : (
        <form
          onSubmit={handleLogin}
          className="flex flex-col mt-14 w-1/3 max-w-lg min-w-min"
        >
          <label htmlFor="email">Email:</label>
          <input
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            type="text"
            id="email"
            placeholder="Ex: johndoe@gmail.com"
            className={inputStyles}
          />
          <label htmlFor="password">Password:</label>
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            id="password"
            placeholder="Ex: ********"
            className={inputStyles}
          />
          <section className="w-full flex justify-between p-4">
            <button className="hover:scale-105 transition-all">
              Back to Home
            </button>
            <button type="submit" className="hover:scale-105 transition-all">
              Login
            </button>
          </section>
          <p>
            Don't have an account?{' '}
            <button className="hover:scale-105 transition-all">
              <Link to="/signup">Create one here</Link>
            </button>
          </p>
        </form>
      )}
    </main>
  );
}
