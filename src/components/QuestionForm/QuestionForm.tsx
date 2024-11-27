import { useEffect, useState } from "react";
import { Question, QuestionTypeEnum } from "../../questions/questions";
import "./QuestionForm.css";
import QuizEnded from "./QuizEnded";

const QuestionForm: React.FC<{ questions: Question[] }> = ({ questions }) => {
  const [isAnswered, setIsAnswered] = useState(false);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [question, setQuestion] = useState<Question | null>(null);
  const [questionsList, setQuestionsList] = useState<Question[]>([...questions]);
  const [isQuizEnded, setIsQuizEnded] = useState(false);
  const [totalCorrect, setTotalCorrect] = useState(0);

  const handleAnswer = (answer: QuestionTypeEnum): void => {
    const isAnswerCorrect = answer === question?.type;
    setIsCorrect(isAnswerCorrect);
    setIsAnswered((prev) => !prev);
    if (isAnswerCorrect) setTotalCorrect((prevCorrect) => prevCorrect + 1);
  };
  const handleNextQuestion = () => {
    setIsAnswered(() => false);
    if (questionsList.length >= 1) {
      const question = getRandom(questionsList);
      setQuestion(question);
      setQuestionsList((prevQuestions) => prevQuestions.filter((item) => item.name !== question.name));
    } else {
      setIsQuizEnded(true);
      console.log("quiz ended!");
    }
  };

  useEffect(() => {
    setQuestionsList([...questions]);
  }, [questions]);

  // Initialize the first question when the component mounts
  useEffect(() => {
    const initialQuestion = getRandom(questionsList);
    setQuestion(initialQuestion);
    setQuestionsList((prevQuestions) => prevQuestions.filter((item) => item.name !== initialQuestion.name));
  }, []);

  return (
    <div className={`container ${isAnswered ? (isCorrect ? "correct" : "incorrect") : ""}`}>
      <span>Is this a cyber company or a hair product?</span>
      <span className="title">{!isQuizEnded ? question?.name : <QuizEnded correct={totalCorrect} total={questions.length}></QuizEnded>}</span>
      {isAnswered ? (
        <div className="answerSection">
          <img className="img" src={`${process.env.PUBLIC_URL}/images/${question?.img}`} />
          <span className="description">{question?.description}</span>
          <button className="answerButton" onClick={() => handleNextQuestion()}>
            Next
          </button>
        </div>
      ) : isQuizEnded ? (
        <></>
      ) : (
        <div className="buttonsContainer">
          <button className="answerButton" onClick={() => handleAnswer(QuestionTypeEnum.HairProduct)}>
            Hair Product
          </button>
          <button className="answerButton" onClick={() => handleAnswer(QuestionTypeEnum.CyberCompany)}>
            Cyber Company
          </button>
        </div>
      )}
    </div>
  );
};

const getRandom = (array: any) => {
  return array[Math.floor(Math.random() * array.length)];
};
export default QuestionForm;
