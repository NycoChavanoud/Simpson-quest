import "./App.css";
import { useState } from "react";
import axios from "axios";
import Simpson from "./Simpson";

const simpsonModel = {
  quote:
    "Facts are meaningless. You could use facts to prove anything that's even remotely true.",
  character: "Homer Simpson",
  image:
    "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FHomerSimpson.png?1497567511939",
  characterDirection: "Right",
};

function App() {
  const [simpson, setSimpson] = useState("");

  const getQuote = () => {
    axios
      .get("https://simpsons-quotes-api.herokuapp.com/quotes")
      .then((res) => res.data)
      .then((data) => setSimpson(data[0]));
  };

  return (
    <>
      <Simpson simpson={simpson} />
      <button type="button" onClick={getQuote}>
        New Quote
      </button>
    </>
  );
}

export default App;
