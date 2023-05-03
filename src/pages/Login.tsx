import React from 'react';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { globalLoadingState } from '../features/globalLoadingSlice';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../app/store';
import Loading from '../components/Loading';

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();
  const globalLoading = useSelector((state: RootState) => state.globalLoading);

  const navigate = useNavigate();

  const inputStyles = 'shadow-md shadow-slate-400 rounded mb-7 p-2';

  async function handleLogin(
    e: React.FormEvent<HTMLFormElement>
  ): Promise<void> {
    e.preventDefault();
    dispatch(globalLoadingState());
    const userAuth = await fetch('/api/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password }),
    });
    const res = await userAuth.json();
    // console.log(res);
    dispatch(globalLoadingState());
    if (res.error) {
      return alert('Invalid username or password');
    } else if (res.success) {
      return navigate('/dashboard');
    } else {
      return alert('An error occurred. Please try again.');
    }
  }

  return (
    <main className="bg-slate-300 min-h-screen w-full flex justify-center">
      {globalLoading ? (
        <Loading />
      ) : (
        <form
          onSubmit={handleLogin}
          className="flex flex-col mt-14 w-1/3 max-w-lg min-w-min"
        >
          <label htmlFor="email">Username:</label>
          <input
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            type="text"
            id="email"
            placeholder="username123"
            className={inputStyles}
          />
          <label htmlFor="password">Password:</label>
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            id="password"
            placeholder="********"
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
