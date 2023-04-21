import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import SecurityQuestion from '../components/SecurityQuestion';

export default function Signup() {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');
  const [firstName, setFirstName] = useState<string>('');
  const [lastName, setLastName] = useState<string>('');

  async function handleSignup(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords don't match");
      setPassword('');
      setConfirmPassword('');
      return;
    }

    const createdUser = await fetch('/api/auth/signup', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    });
    const res = await createdUser.json();
    console.log(res);
  }

  return (
    <main className="bg-slate-300 min-h-screen w-full flex justify-center">
      <form
        onSubmit={handleSignup}
        className="flex flex-col mt-14 w-1/3 max-w-lg min-w-min"
      >
        <label htmlFor="email">Email:</label>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="text"
          id="email"
          placeholder="Ex: johndoe@gmail.com"
          className="p-2"
        />
        <label htmlFor="password" className="mt-6">
          Password:
        </label>
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          id="password"
          placeholder="mypassword"
          className="p-2"
        />
        <label htmlFor="confirm-password" className="mt-6">
          Confirm Password:
        </label>
        <input
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          type="password"
          id="confirm-password"
          placeholder="mypassword"
          className="p-2"
        />
        <label htmlFor="first-name" className="mt-6">
          Your First Name:
        </label>
        <input
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          type="text"
          id="first-name"
          placeholder="John"
          className="p-2"
        />
        <label htmlFor="last-name" className="mt-6">
          Your Last Name:
        </label>
        <input
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          type="text"
          id="last-name"
          placeholder="Doe"
          className="p-2"
        />

        <SecurityQuestion questionNum="1" />
        <SecurityQuestion questionNum="2" />
        <SecurityQuestion questionNum="3" />

        <section className="flex justify-between">
          <button>
            <Link to="/login">Back to Login Page</Link>
          </button>
          <button type="submit">Submit</button>
        </section>
      </form>
    </main>
  );
}
