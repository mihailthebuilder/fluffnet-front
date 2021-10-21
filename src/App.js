import { useState } from "react";
import "./App.scss";
import Header from "./components/Header";
import Upload from "./components/Upload";
import Response from "./components/Response";
import Faq from "./components/Faq";
import Feedback from "./components/Feedback";

function App() {
  const [image, setImage] = useState({ preview: "", raw: "" });
  const [message, setMessage] = useState("gimme an image puh-leeeaase 🥺");
  const [prediction, setPrediction] = useState({});

  return (
    <div className="App">
      <Header />

      <Upload
        image={image}
        setImage={setImage}
        setMessage={setMessage}
        setPrediction={setPrediction}
      />

      <Response message={message} />

      {prediction["prob"] && image.raw && (
        <Feedback prediction={prediction} rawImage={image.raw} />
      )}

      <Faq />
    </div>
  );
}

export default App;
