import { useDispatch } from 'react-redux';
import { globalLoadingState } from '../features/globalLoadingSlice';

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
  const dispatch = useDispatch();

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
  ) {
    dispatch(globalLoadingState());
    return alert('All required fields must be filled out');
  }

  if (password !== confirmPassword) {
    dispatch(globalLoadingState());
    return alert('Passwords do not match');
  }
}
