import { useEffect, useState } from "react";
import "./App.scss";
import axios from "axios";

function App() {
  const [apiResponse, setApiResponse] = useState("");

  const requestUrl =
    window.location.hostname === "localhost" ? "http://localhost:5000/" : "";

  useEffect(() => {
    axios.post(requestUrl).then((res) => {
      setApiResponse(res.data);
      console.log(res);
    });
  }, [requestUrl]);

  return <div className="App">{apiResponse ? "Removed" : apiResponse}</div>;
}

export default App;
