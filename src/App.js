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
    <div>
      <div>
        {Object.keys(prediction).length > 0
          ? JSON.stringify(prediction)
          : "No API response"}
      </div>

      <form onSubmit={predictImage}>
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

        <button type="submit">Submit</button>
      </form>

      <img alt="" src={image.preview} />
    </div>
  );
}

export default App;
