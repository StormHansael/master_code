import "./QuizPopup.css";
import backbutton from "../../assets/ga_tilbake.png";
import startbutton from "../../assets/start_button.png";
import { useState } from "react";
import quizData from "./quizData";
import nextQuestion from "../../assets/nextQuestion.png";
import storGåtilbake from "../../assets/storGåTilbake.png";
import star_colored from "../../assets/star_colored.png"

export default function QuizPopup({ rockNumber, onClose, onQuizComplete }) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [started, setStarted] = useState(false);
  const [hasAnswered, setHasAnswered] = useState(false);

  const levelData = quizData[rockNumber];

  if (!levelData) {
    return null;
  }

  const currentQuestion = levelData.questions[currentQuestionIndex];

  const handleAnswerClick = (answer) => {
    if (hasAnswered) return;

    setSelectedAnswer(answer);
    setHasAnswered(true);

    if (answer === currentQuestion.correctAnswer) {
      setScore((prev) => prev + 1);
    }
  };

  const handleNextQuestion = () => {
    const nextIndex = currentQuestionIndex + 1;

    if (nextIndex < levelData.questions.length) {
      setCurrentQuestionIndex(nextIndex);
      setSelectedAnswer("");
      setHasAnswered(false);
    } else {
      onQuizComplete(rockNumber, score, levelData.questions.length);
      setShowResult(true);
    }
  };

  return (
    <div className="popup_overlay" onClick={onClose}>
      <div className="popup_box" onClick={(e) => e.stopPropagation()}>
        <div>
          <button onClick={onClose}>
            <img src={backbutton} alt="Tilbake" />
          </button>

          <div className="mainQuiz">
            {!started && !showResult && (
              <div className="startPage">
                <h2 className="quizzname">{levelData.title}</h2>
                <div id="spacer">You clicked rock {rockNumber}</div>
                <button onClick={() => setStarted(true)}>
                  <img src={startbutton} alt="Start quiz" />
                </button>
              </div>
            )}

            {started && !showResult && (
              <div className="quiz_content">
                <h2 className="questiontracker">
                  Spørsmål {currentQuestionIndex + 1} / {levelData.questions.length}
                </h2>

                <h2 className="questionH">{currentQuestion.question}</h2>

                <div className="answer_list">
                  {currentQuestion.options.map((option) => {
                    let buttonClass = "";

                    if (hasAnswered) {
                      if (option === currentQuestion.correctAnswer) {
                        buttonClass = "correct_answer";
                      } else if (option === selectedAnswer) {
                        buttonClass = "wrong_answer";
                      }
                    } else if (selectedAnswer === option) {
                      buttonClass = "selected_answer";
                    }

                    return (
                      <button
                        key={option}
                        className={buttonClass}
                        onClick={() => handleAnswerClick(option)}
                        disabled={hasAnswered}
                      >
                        {option}
                      </button>
                    );
                  })}
                </div>

                {hasAnswered && (
                  <button className="nextQuestion" onClick={handleNextQuestion}>
                    <img src={nextQuestion} alt="Neste spørsmål" />
                  </button>
                )}
              </div>
            )}

            {showResult && (
              <div className="quiz_content">
                <h2 className="quizzname">{levelData.title}</h2>

                <h3>
                  Du fikk {score} av {levelData.questions.length} riktige.
                </h3>

                {score === levelData.questions.length && (
                  <div className="star_reward">
                    <h3>Gratulerer, du fikk en stjerne!</h3>
                    <img src={star_colored} alt="Stjerne" className="reward_star" />
                  </div>
                )}

                <button
                  style={{ bottom: "100%", position: "relative" }}
                  onClick={onClose}
                >
                  <img src={storGåtilbake} alt="Gå tilbake" />
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}