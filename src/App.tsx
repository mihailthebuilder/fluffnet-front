import { useState } from "react";
import "./App.scss";
import Header from "./components/Header";
import Upload from "./components/Upload";
import Response from "./components/Response";
import Faq from "./components/Faq";
import Feedback from "./components/Feedback";
import "./resources/fire";

function App() {
  const [image, setImage] = useState<ImageState>(null);
  const [message, setMessage] = useState("gimme an image puh-leeeaase 🥺");
  const [prediction, setPrediction] = useState<PredictionState>(null);

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

      {prediction && image && (
        <Feedback prediction={prediction} rawImage={image.raw} />
      )}

      <Faq />
    </div>
  );
}

export default App;
