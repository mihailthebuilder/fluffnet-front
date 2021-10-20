import { useState } from "react";
import "./App.scss";
import Header from "./components/Header";
import Upload from "./components/Upload";

function App() {
  const [image, setImage] = useState({ preview: "", raw: "" });
  const [message, setMessage] = useState("gimme an image puh-leeeaase 🥺");

  return (
    <div className="App">
      <Header />

      <Upload image={image} setImage={setImage} setMessage={setMessage} />

      <section id="results">
        <h2>
          🤖 says...
          <span className="robot-message">{message}</span>
        </h2>
      </section>

      <section id="faq">
        <h2>FAQ</h2>
        <div className="question">
          <h3>How does this work?</h3>
          <p>
            Check out the source code{" "}
            <a href="https://github.com/mihailthebuilder/fluffnet">here</a>.
          </p>
        </div>
        <div className="question">
          <h3>Do you store the images I upload?</h3>
          <p>Nope.</p>
        </div>
        <div className="question">
          <h3>
            How can I let you know about an issue/error with the website/model?
          </h3>
          <p>
            If you're a dev, you can raise a ticket on the{" "}
            <a href="https://github.com/mihailthebuilder/fluffnet">
              GitHub repo
            </a>
            . If not, you can send me a message on{" "}
            <a href="https://www.linkedin.com/in/mihailmarian/">LinkedIn</a>.
          </p>
        </div>
        <div className="question">
          <h3>Can I contact you about anything else?</h3>
          <p>
            Sure! I'm always open to talking to people about deep learning. Just
            send me a message on{" "}
            <a href="https://www.linkedin.com/in/mihailmarian/">LinkedIn</a>.
          </p>
        </div>
      </section>
    </div>
  );
}

export default App;
