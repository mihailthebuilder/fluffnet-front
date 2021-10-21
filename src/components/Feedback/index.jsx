import { useState } from "react";
import "./index.scss";
import { saveFeedback } from "../../resources/fire";

const Feedback = ({ prediction, rawImage }) => {
  const [submitted, setSubmitted] = useState(false);

  const sendFeedback = (event) => {
    setSubmitted(true);
    saveFeedback(rawImage, prediction, event.target.value === "correct");
  };

  return (
    <section id="feedback">
      {submitted ? (
        <h2 className="feedback-sent">Thank you for the feedback 🙏</h2>
      ) : (
        <>
          <h2>Was the 🤖 correct?</h2>
          <p className="note">
            We will store the photo and the 🤖's results if you answer this. See
            the <a href="#faq">FAQs</a> for more.
          </p>
          <div className="buttons-container">
            <button onClick={sendFeedback} value="correct">
              Yes
            </button>
            <button onClick={sendFeedback} value="incorrect">
              No
            </button>
          </div>
        </>
      )}
    </section>
  );
};

export default Feedback;
