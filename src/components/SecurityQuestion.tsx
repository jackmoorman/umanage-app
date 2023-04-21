import React from 'react';

type SecurityQuestionsProps = {
  questionNum: string;
};

export default function SecurityQuestions({
  questionNum,
}: SecurityQuestionsProps) {
  return (
    <div className="w-full flex flex-col mt-6">
      <label htmlFor={`question-${questionNum}`}>
        Security Question #{questionNum}
      </label>
      <select
        name="security-questions"
        id={`question-${questionNum}`}
        className="p-1"
      >
        <option value="pet-name">What was the name of your first pet?</option>
        <option value="mothers-maiden-name">
          What is your mother's maiden name?
        </option>
        <option value="fathers-middle-name">
          What is your father's middle name?
        </option>
        <option value="city-born">In what city were you born?</option>
        <option value="high-school">
          What was the name of your high school?
        </option>
        <option value="elementary-school">
          What was the name of your elementary school?
        </option>
        <option value="favorite-food-as-child">
          What was your favorite food as a child?
        </option>
        <option value="first-car">
          What was the make and model of your first car?
        </option>
      </select>
    </div>
  );
}
