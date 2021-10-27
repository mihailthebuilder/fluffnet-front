import { useState } from "react";
import axios from "axios";
import "./index.scss";

const Upload = ({ image, setImage, setMessage, setPrediction }) => {
  const [isLoading, setIsLoading] = useState(false);

  const uploadImage = (event) => {
    setImage(null);
    setPrediction({});
    setMessage("please give me an image 🖼️");

    const rawFile = event.target.files[0];

    if (!rawFile) return;

    if (!rawFile.type.includes("image")) return;

    if (rawFile.size / 1024 / 1024 >= 10) {
      setMessage("upload an image of less than 10 MB");
      return;
    }

    setImage({
      preview: URL.createObjectURL(rawFile),
      raw: rawFile,
    });
    setMessage("quick, send it to me 📨");
  };

  const predictImage = (event) => {
    event.preventDefault();
    setIsLoading(true);
    setMessage("analysing the image, might take up to 2 minutes ⏳");

    let fd = new FormData();
    fd.append("image", image.raw);

    const requestUrl =
      window.location.hostname === "localhost"
        ? "http://localhost:5000/"
        : "https://fluffnet-api.herokuapp.com";

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

        const conclusion = isFluffy ? "it's fluffy 🧸" : "it's not fluffy 🔨";
        const confidence = ` (with ${probShown}% confidence)`;

        setPrediction({ fluffy, prob });
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
    <section id="hero">
      <div className="hero-left">
        <p>
          Upload an image and our 🤖 will tell you if it has something fluffy in
          it 🧸.
        </p>
        <form onSubmit={predictImage}>
          <label>
            <span className="button upload-button">Upload image</span>
            <input onChange={uploadImage} type="file" required></input>
          </label>

          <button
            className={!image || isLoading ? "button" : "button submit-enabled"}
            type="submit"
            disabled={!image || isLoading}
          >
            {isLoading ? "Loading..." : "Submit"}
          </button>
        </form>
      </div>
      <div className="hero-right">
        {image ? (
          <img alt="" src={image.preview} />
        ) : (
          <div className="image-placeholder">Image will be shown here </div>
        )}
      </div>
    </section>
  );
};

export default Upload;
