import "./App.css";
import { useEffect, useState } from "react";

let gettingJoke = false;

function App() {

  const [jokes, setJokes] = useState([]);
  const [rando, setRando] = useState(0);

  const randomNum = (num) => {
    return Math.floor(Math.random() * num);
  }

  const getJoke = async () => {
    try {
      const res = await fetch('http://localhost:3030/jokes');
      const parsed = await res.json();
      console.log(parsed)
      setJokes(parsed.data)
      setRando(randomNum(19))
    } catch (e) {
      console.error(e)
    }
  }

  useEffect(() => {
    getJoke();
  }, []);

  return (
    <div className="App">
      Ready for a funny joke?
      <div className="joke">{ jokes.length ? jokes[rando].joke : `¯\_(ツ)_/¯`}</div>
    </div>
  );
}

export default App;
