export default function validateNewUser({
  username,
  password,
  confirmPassword,
  q1,
  q2,
  q3,
  answerOne,
  answerTwo,
  answerThree,
}: ValidateNewUser): boolean {
  if (
    !username ||
    !password ||
    !confirmPassword ||
    !q1 ||
    !q2 ||
    !q3 ||
    !answerOne ||
    !answerTwo ||
    !answerThree
  ) {
    console.log("Something doesn't exist");
    alert('All required fields must be filled out');
    return false;
  }

  if (password !== confirmPassword) {
    console.log("passwords don't match");
    alert('Passwords do not match');
    return false;
  }

  if (username.length < 8 || password.length < 8) {
    console.log('username or password is too short');
    alert('Username & password must be at least 8 characters');
    return false;
  }

  return true;
}
