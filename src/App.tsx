import React from "react";
import "./App.css";
import questions from "./questions/questions";
const getRandom = (array: any) => {
  return array[Math.floor(Math.random() * array.length)];
};

function App() {
  const filteredQuestions = [...questions];
  const question = getRandom(filteredQuestions);
  filteredQuestions.filter((item) => item.name != question.name);
  return (
    <div className="App">
      <div>{question.name}</div>
    </div>
  );
}

export default App;
