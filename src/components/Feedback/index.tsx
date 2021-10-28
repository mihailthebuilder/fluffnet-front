import { useState } from "react";
import "./index.scss";
import { saveFeedback } from "../../resources/fire";

const Feedback = ({
  prediction,
  rawImage,
}: {
  prediction: Prediction;
  rawImage: File;
}) => {
  const [submitted, setSubmitted] = useState(false);

  const sendFeedback = (correct: boolean) => {
    setSubmitted(true);
    saveFeedback(rawImage, prediction, correct);
  };

  return (
    <section id="feedback">
      {submitted ? (
        <p className="feedback-sent">Thank you for the feedback 🙏</p>
      ) : (
        <>
          <div className="buttons-container">
            <button
              type="button"
              className="button left"
              onClick={() => sendFeedback(true)}
            >
              Correct
            </button>
            <button
              type="button"
              className="button right"
              onClick={() => sendFeedback(false)}
            >
              Incorrect
            </button>
          </div>
          <p className="note">
            We will store the photo and the 🤖's results if you answer this. See
            the <a href="#faq">FAQs</a> for more.
          </p>
        </>
      )}
    </section>
  );
};

export default Feedback;
