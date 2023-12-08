import { useEffect, useState } from "react";
import { Question, QuestionTypeEnum } from "../../questions/questions";
import "./QuestionForm.css"

const QuestionForm: React.FC<{ questions: Question[] }> = ({ questions }) => {
    const [isAnswered, setIsAnswered] = useState(false);
    const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
    const [question, setQuestion] = useState<Question | null>(null);
    const [questionsList, setQuestionsList] = useState<Question[]>([...questions]);


    const handleAnswer = (buttonType: QuestionTypeEnum): void => {
        setIsCorrect(buttonType === question?.type);
        setIsAnswered(prev => !prev);
    }
    const handleNextQuestion = () => {
        setIsAnswered(() => false);
        const question = getRandom(questionsList);
        setQuestion(question);
        setQuestionsList((prevQuestions) =>
            prevQuestions.filter((item) => item.name !== question.name));
    }

    useEffect(() => {
        setQuestionsList([...questions]);
    }, [questions]);

    // Initialize the first question when the component mounts
    useEffect(() => {
        const initialQuestion = getRandom(questionsList);
        setQuestion(initialQuestion);
        setQuestionsList((prevQuestions) =>
            prevQuestions.filter((item) => item.name !== initialQuestion.name)
        );
    }, []);

    return <div className={`container ${isAnswered ? (isCorrect ? 'correct' : 'incorrect') : ''}`}>
        <span>Is this a cyber company or a hair product?</span>
        <span className="title">{question?.name}</span>
        {isAnswered ?
            <div className='answerSection'>
                <span>{question?.description}</span>
                <button className="answerButton" onClick={() => handleNextQuestion()}>Next</button>
            </div>
            :
            <div className='buttonsContainer'>
                <button className='answerButton' onClick={() => handleAnswer(QuestionTypeEnum.HairProduct)}>Hair Product</button>
                <button className='answerButton' onClick={() => handleAnswer(QuestionTypeEnum.CyberCompany)}>Cyber Company</button>
            </div>}
    </div>
};

const getRandom = (array: any) => {
    return array[Math.floor(Math.random() * array.length)];
};
export default QuestionForm;