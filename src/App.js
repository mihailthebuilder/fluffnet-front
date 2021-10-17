import { useState } from "react";
import "./App.scss";
import axios from "axios";

function App() {
  const [image, setImage] = useState({ preview: "", raw: "" });
  const [apiResponse, setApiResponse] = useState("");

  const requestUrl =
    window.location.hostname === "localhost" ? "http://localhost:5000/" : "";

  const predictImage = () => {
    axios.get(requestUrl).then((res) => {
      if (res.status === 200) {
        setApiResponse(res.data);
        return;
      }

      setApiResponse("error");
      console.error("Error", res);
    });
  };

  return (
    <div className="App">
      <div>{apiResponse ? apiResponse : "No API response"}</div>

      <form onSubmit={predictImage}>
        <input
          onChange={(e) =>
            setImage({
              preview: URL.createObjectURL(e.target.files[0]),
              raw: e.target.files[0],
            })
          }
          type="file"
        ></input>

        <button type="submit">Submit</button>
      </form>

      <img src={image.preview} />
    </div>
  );
}

export default App;
