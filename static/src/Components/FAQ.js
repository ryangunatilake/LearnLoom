import React, { useState } from "react";
import "../Styles/FAQ.css";

function FAQ() {
  const [showAnswer, setShowAnswer] = useState({
    question1: false,
    question2: false,
    question3: false,
    question4: false
  });

  const toggleAnswer = (question) => {
    setShowAnswer({
      ...showAnswer,
      [question]: !showAnswer[question]
    });
  };

  return (
    <div className="faq-section">
      <div className="faq-left">
        <h3 className="faq-title">Frequently Asked Questions</h3>
        <p className="faq-description">
          Explore common inquiries about our study tool. Have a question not
          answered here? Feel free to reach out to us.
        </p>
      </div>
      <div className="faq-right">
        <div className="faq-item" onClick={() => toggleAnswer("question1")}>
          <h4 className="faq-question">What is LearnLoom?</h4>
          <span className={`faq-arrow ${showAnswer.question1 ? "rotate" : ""}`}>&#9660;</span>
          {showAnswer.question1 && (
            <p className="faq-answer">
              LearnLoom is an innovative platform designed to revolutionize the
              way you learn and study. It combines advanced technology to
              transform lecture recordings into comprehensive notes, summaries,
              flashcards, and quizzes.
            </p>
          )}
        </div>
        {/* Repeat the above structure for other questions */}
        <div className="faq-item" onClick={() => toggleAnswer("question2")}>
          <h4 className="faq-question">How does the platform work?</h4>
          <span className={`faq-arrow ${showAnswer.question2 ? "rotate" : ""}`}>&#9660;</span>
          {showAnswer.question2 && (
            <p className="faq-answer">Your answer here</p>
          )}
        </div>
        <div className="faq-item" onClick={() => toggleAnswer("question3")}>
          <h4 className="faq-question">What sets LearnLoom apart?</h4>
          <span className={`faq-arrow ${showAnswer.question3 ? "rotate" : ""}`}>&#9660;</span>
          {showAnswer.question3 && (
            <p className="faq-answer">Your answer here</p>
          )}
        </div>
        <div className="faq-item" onClick={() => toggleAnswer("question4")}>
          <h4 className="faq-question">Is my data secure on LearnLoom?</h4>
          <span className={`faq-arrow ${showAnswer.question4 ? "rotate" : ""}`}>&#9660;</span>
          {showAnswer.question4 && (
            <p className="faq-answer">Your answer here</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default FAQ;