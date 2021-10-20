import { useState } from "react";
import "./App.scss";
import axios from "axios";

function App() {
  const [image, setImage] = useState({ preview: "", raw: "" });
  const [message, setMessage] = useState("gimme an image puh-leeeaase 🥺");
  const [isLoading, setIsLoading] = useState(false);

  const requestUrl =
    window.location.hostname === "localhost"
      ? "http://localhost:5000/"
      : "https://fluffnet-api.herokuapp.com";

  const uploadImage = (event) => {
    const rawFile = event.target.files[0];

    if (!rawFile.type.includes("image")) {
      setImage({ preview: "", raw: "" });
      setMessage("please give me an image 🖼️");
    } else if (rawFile.size / 1024 / 1024 >= 10) {
      setImage({ preview: "", raw: "" });
      setMessage("upload an image of less than 10 MB");
    } else {
      setImage({
        preview: URL.createObjectURL(rawFile),
        raw: rawFile,
      });
      setMessage("quick, send it to me 📨");
    }
  };

  const predictImage = (event) => {
    event.preventDefault();
    setIsLoading(true);

    let fd = new FormData();
    fd.append("image", image.raw);

    axios
      .post(requestUrl, fd)
      .then((res) => {
        if (res.status !== 200) {
          throw new Error("Response status !== 200", { res });
        }

        const { fluffy, prob } = res.data;

        if (fluffy === undefined || prob === undefined)
          throw new Error("Undefined response", { res });

        const isFluffy = fluffy === "True";

        let probShown = Math.round(prob * 100);
        if (!isFluffy) probShown = 100 - probShown;

        const conclusion = isFluffy ? "it's fluffy 🧸" : "it's not fluffy 🪨";
        const confidence = ` (with ${probShown}% confidence)`;

        setMessage(conclusion + confidence);
        setIsLoading(false);
      })
      .catch((error) => {
        setMessage("something went wrong 😵 try again please!");
        console.error(error.message);
        console.error(error.res);
      });
  };

  return (
    <div className="App">
      <header>
        <nav>
          <a href="#faq">FAQ</a>
        </nav>
        <h1>☁️ FluffNet ☁️</h1>
      </header>

      <section id="hero">
        <div className="hero-left">
          <p>
            Upload an image and our 🤖 will tell you if it has something fluffy
            in it 🧸.
          </p>
          <form onSubmit={predictImage}>
            <label>
              <span className="button upload-button">Upload image</span>
              <input onChange={uploadImage} type="file" required></input>
            </label>

            <button
              className={
                !image.preview || isLoading ? "button" : "button submit-enabled"
              }
              type="submit"
              disabled={!image.preview || isLoading}
            >
              {isLoading ? "Loading..." : "Submit"}
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
