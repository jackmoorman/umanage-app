import React from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import SecurityQuestion from '../components/SecurityQuestion';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../app/store';
import { globalLoadingState } from '../features/globalLoadingSlice';

export default function Signup() {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');
  const [firstName, setFirstName] = useState<string>('');
  const [lastName, setLastName] = useState<string>('');
  const [q1, setQ1] = useState('What was the name of your first pet?');
  const [q2, setQ2] = useState("What is your mother's maiden name?");
  const [q3, setQ3] = useState("What is your father's middle name?");
  const [answerOne, setAnswerOne] = useState<string>('');
  const [answerTwo, setAnswerTwo] = useState<string>('');
  const [answerThree, setAnswerThree] = useState<string>('');

  const navigate = useNavigate();

  const dispatch = useDispatch();
  const globalLoading = useSelector((state: RootState) => state.globalLoading);

  async function handleSignup(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    console.log(
      email,
      password,
      confirmPassword,
      firstName,
      lastName,
      q1,
      answerOne,
      q2,
      answerTwo,
      q3,
      answerThree
    );

    dispatch(globalLoadingState());

    const createdUser = await fetch('/api/auth/signup', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        email,
        password,
        firstName,
        lastName,
        q1,
        answerOne,
        q2,
        answerTwo,
        q3,
        answerThree,
      }),
    });
    dispatch(globalLoadingState());
    if (createdUser.status !== 200) {
      return alert('Error creating user');
    } else {
      return navigate('/login');
    }
  }

  return (
    <>
      {globalLoading ? (
        <main className="flex justify-center mt-10">
          <h1 className="text-4xl">Loading...</h1>
        </main>
      ) : (
        <main className="bg-slate-300 min-h-screen w-full flex justify-center">
          <form
            onSubmit={handleSignup}
            className="flex flex-col mt-14 w-1/3 max-w-lg min-w-min"
          >
            <p>
              <span className=" text-red-600 text-lg">*</span> : Required Field
            </p>
            <label htmlFor="email">
              <span className=" text-red-600 text-lg">*</span> Email:
            </label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="text"
              id="email"
              placeholder="Ex: johndoe@gmail.com"
              className="p-2"
            />
            <label htmlFor="password" className="mt-6">
              <span className=" text-red-600 text-lg">*</span> Password:
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
              <span className=" text-red-600 text-lg">*</span> Confirm Password:
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

            <SecurityQuestion
              questionNum="1"
              question={q1}
              setQuestion={setQ1}
              answer={answerOne}
              setAnswer={setAnswerOne}
            />
            <SecurityQuestion
              questionNum="2"
              question={q2}
              setQuestion={setQ2}
              answer={answerTwo}
              setAnswer={setAnswerTwo}
            />
            <SecurityQuestion
              questionNum="3"
              question={q3}
              setQuestion={setQ3}
              answer={answerThree}
              setAnswer={setAnswerThree}
            />

            <section className="flex justify-between">
              <button>
                <Link to="/login">Back to Login Page</Link>
              </button>
              <button type="submit">Submit</button>
            </section>
          </form>
        </main>
      )}
    </>
  );
}
