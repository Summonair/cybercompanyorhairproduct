import "./App.css";
import Footer from "./components/footer/footer";
import QuestionForm from "./components/QuestionForm/QuestionForm";
import questions from "./questions/questions";

function App() {
  return (
    <div className="App">
      <QuestionForm questions={questions}></QuestionForm>
      <Footer></Footer>
    </div>
  );
}

export default App;
