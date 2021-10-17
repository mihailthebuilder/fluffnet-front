import "./App.scss";
import axios from "axios";

function App() {
  const requestUrl =
    window.location.hostname === "localhost"
      ? "http://localhost:5000/"
      : "https://desolate-harbor-87386.herokuapp.com/";

  return <div className="App">Removed</div>;
}

export default App;
