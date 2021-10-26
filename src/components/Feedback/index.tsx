import { useState } from "react";
import "./index.scss";
import { saveFeedback } from "../../resources/fire";

const Feedback = ({
  prediction,
  rawImage,
}: {
  prediction: Prediction;
  rawImage: string;
}) => {
  const [submitted, setSubmitted] = useState(false);

  const sendFeedback = (event) => {
    setSubmitted(true);
    saveFeedback(rawImage, prediction, event.target.value === "correct");
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
              onClick={sendFeedback}
              value="correct"
            >
              Correct
            </button>
            <button
              className="button right"
              onClick={sendFeedback}
              value="incorrect"
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
