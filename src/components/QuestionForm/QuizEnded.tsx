import "./QuestionForm.css"

const QuizEnded: React.FC<{ correct: number; total: number }> = ({
  correct,
  total,
}) => {
  return (
    <>
      <span>
        You got {correct}/{total} questions right
      </span>
      <div className={correct === total && correct !== 0 ? "correct" : ""}>
        {correct === total && correct !== 0 ? "Flawless Score!" : ""}
      </div>
    </>
  );
};
export default QuizEnded;
