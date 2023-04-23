import { useDispatch } from 'react-redux';

interface ValidateNewUser {
  email: string;
  password: string;
  confirmPassword: string;
  q1: string;
  q2: string;
  q3: string;
  answerOne: string;
  answerTwo: string;
  answerThree: string;
}

export default function validateNewUser({
  email,
  password,
  confirmPassword,
  q1,
  q2,
  q3,
  answerOne,
  answerTwo,
  answerThree,
}: ValidateNewUser) {
  if (
    !email ||
    !password ||
    !confirmPassword ||
    !q1 ||
    !q2 ||
    !q3 ||
    !answerOne ||
    !answerTwo ||
    !answerThree
  )
    return alert('All required fields must be filled out');

  if (password !== confirmPassword) return alert('Passwords do not match');
}
