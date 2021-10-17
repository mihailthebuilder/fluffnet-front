import { useEffect, useState } from "react";
import "./App.scss";
import axios from "axios";

function App() {
  const [apiResponse, setApiResponse] = useState("");

  const requestUrl =
    window.location.hostname === "localhost" ? "http://localhost:5000/" : "";

  useEffect(() => {
    axios.get(requestUrl).then((res) => {
      if (res.status === 200) {
        setApiResponse(res.data);
        return;
      }

      setApiResponse("error");
      console.error("Error", res);
    });
  }, [requestUrl]);

  return (
    <div className="App">{apiResponse ? apiResponse : "No API response"}</div>
  );
}

export default App;
