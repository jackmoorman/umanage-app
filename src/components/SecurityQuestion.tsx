import React from 'react';

type SecurityQuestionsProps = {
  questionNum: string;
  question: string;
  setQuestion: React.Dispatch<React.SetStateAction<string>>;
  answer: string;
  setAnswer: React.Dispatch<React.SetStateAction<string>>;
};

export default function SecurityQuestions({
  questionNum,
  question,
  setQuestion,
  answer,
  setAnswer,
}: SecurityQuestionsProps) {
  const allQs = [
    'What was the name of your first pet?',
    "What is your mother's maiden name?",
    "What is your father's middle name?",
    'In what city were you born?',
    'What was the name of your high school?',
    'What was the name of your elementary school?',
    'What was your favorite food as a child?',
    'What was the make and model of your first car?',
  ];

  return (
    <div className="w-full flex flex-col mt-6">
      <label htmlFor={`question-${questionNum}`}>
        <span className=" text-red-600 text-lg">*</span> Security Question #
        {questionNum}
      </label>
      <select
        name="security-questions"
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
        id={`question-${questionNum}`}
        className="p-1"
      >
        <option value="What was the name of your first pet?">
          What was the name of your first pet?
        </option>
        <option value="What is your mother's maiden name?">
          What is your mother's maiden name?
        </option>
        <option value="What is your father's middle name?">
          What is your father's middle name?
        </option>
        <option value="In what city were you born?">
          In what city were you born?
        </option>
        <option value="What was the name of your high school?">
          What was the name of your high school?
        </option>
        <option value="What was the name of your elementary school?">
          What was the name of your elementary school?
        </option>
        <option value="What was your favorite food as a child?">
          What was your favorite food as a child?
        </option>
        <option value="What was the make and model of your first car?">
          What was the make and model of your first car?
        </option>
      </select>
      <input
        value={answer}
        onChange={(e) => setAnswer(e.target.value)}
        type="text"
        className="mt-2 p-2"
        placeholder="Answer"
      />
    </div>
  );
}
