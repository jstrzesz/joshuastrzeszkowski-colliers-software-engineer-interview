import "./App.css";
import { useEffect, useState } from "react";

let gettingJoke = false;

function App() {

  const [joke, setJoke] = useState('');

  const getJoke = async () => {
    try {
      const res = await fetch('http://localhost:3030/jokes');
      const parsed = await res.json();
      setJoke(parsed.data[0].attributes.joke)
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
      <div className="joke">{ joke ? joke : `¯\_(ツ)_/¯`}</div>
    </div>
  );
}

export default App;
