import { useState } from "react";
import "./App.scss";
import Header from "./components/Header";
import Upload from "./components/Upload";
import Response from "./components/Response";
import Faq from "./components/Faq";

function App() {
  const [image, setImage] = useState({ preview: "", raw: "" });
  const [message, setMessage] = useState("gimme an image puh-leeeaase 🥺");

  return (
    <div className="App">
      <Header />

      <Upload image={image} setImage={setImage} setMessage={setMessage} />

      <Response message={message} />

      <Faq />
    </div>
  );
}

export default App;
