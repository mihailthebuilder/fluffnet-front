import { useState } from "react";
import "./App.scss";
import axios from "axios";

function App() {
  const [image, setImage] = useState({ preview: "", raw: "" });
  const [message, setMessage] = useState("gimme an image puh-leeeaase 🥺");

  const requestUrl =
    window.location.hostname === "localhost" ? "http://localhost:5000/" : "";

  const uploadImage = (event) => {
    const rawFile = event.target.files[0];

    setImage({
      preview: URL.createObjectURL(rawFile),
      raw: rawFile,
    });

    setMessage("quick, send it to me 📨");
  };

  const predictImage = (event) => {
    event.preventDefault();

    let fd = new FormData();
    fd.append("image", image.raw);

    axios.post(requestUrl, fd).then((res) => {
      if (res.status !== 200) {
        console.error("Error", res);

        return;
      }

      const { fluffy, prob } = res.data;
      const isFluffy = fluffy === "True";

      const conclusion = isFluffy ? "it's fluffy ☁️" : "it's not fluffy 🪨";
      const confidence = ` (with ${isFluffy ? "x%" : "y%"} confidence)`;

      setMessage(conclusion + confidence);
    });
  };

  return (
    <div className="App">
      <header>
        <nav>
          <a href="#faq">FAQ</a>
        </nav>
        <h1>FluffNet</h1>
      </header>

      <section id="hero">
        <div className="hero-left">
          <p>
            Upload an image and our 🤖 will tell you if it has something fluffy
            in it ☁️
          </p>
          <form onSubmit={predictImage}>
            <label>
              <span className="button upload-button">Upload image</span>
              <input onChange={uploadImage} type="file" required></input>
            </label>

            <button
              className={image.preview ? "button submit-enabled" : "button"}
              type="submit"
              disabled={!image.preview}
            >
              Submit
            </button>
          </form>
        </div>
        <div className="hero-right">
          {image.preview ? (
            <img alt="" src={image.preview} />
          ) : (
            <div className="image-placeholder">Image will be shown here </div>
          )}
        </div>
      </section>

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
      </section>
    </div>
  );
}

export default App;
