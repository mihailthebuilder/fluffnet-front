import { useState } from "react";
import "./App.scss";
import axios from "axios";

function App() {
  const [image, setImage] = useState({ preview: "", raw: "" });
  const [prediction, setPrediction] = useState({});

  const requestUrl =
    window.location.hostname === "localhost" ? "http://localhost:5000/" : "";

  const predictImage = (e) => {
    e.preventDefault();

    let fd = new FormData();
    fd.append("image", image.raw);

    axios.post(requestUrl, fd).then((res) => {
      if (res.status === 200) {
        setPrediction(res.data);
        return;
      }

      console.error("Error", res);
    });
  };

  return (
    <div className="App">
      <nav>
        <a href="#faq">FAQ</a>
      </nav>
      <h1>FluffNet</h1>

      <section id="hero">
        <div className="main-left">
          <p>
            Upload an image and our 🤖 will tell you if it has something fluffy
            in it ☁️
          </p>
          <form onSubmit={predictImage}>
            <label>
              <span className="button upload-button">Upload image</span>
              <input
                onChange={(e) =>
                  setImage({
                    preview: URL.createObjectURL(e.target.files[0]),
                    raw: e.target.files[0],
                  })
                }
                type="file"
                required
              ></input>
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
        <div>
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
          <span className="robot-message">
            {image.preview
              ? Object.keys(prediction).length > 0
                ? prediction.fluffy === "True"
                  ? "it's fluffy 🧸"
                  : "it's not fluffy 🪨"
                : "now click 'dat Run button 🏃‍♀️"
              : "gimme an image puh-leeeaase 🥺"}
          </span>
        </h2>
      </section>
    </div>
  );
}

export default App;
