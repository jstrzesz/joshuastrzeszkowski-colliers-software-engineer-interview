import "./App.css";
import { useEffect, useState } from "react";

let gettingJoke = false;

function App() {

  const [jokes, setJokes] = useState([]);
  const [rando, setRando] = useState(0);
  const [term, setTerm] = useState('');

  const randomNum = (num) => {
    return Math.floor(Math.random() * num);
  }

  const getJokes = async (term = '') => {
    try {
      const res = await fetch(`http://localhost:3030/jokes${term ? `?term=${term}` : ''}`);
      const parsed = await res.json();
      console.log(parsed)
      setJokes(parsed.data)
      setRando(randomNum(parsed.data.length -1))
    } catch (e) {
      console.error(e)
    }
  }

  const setLike = (joke, bool) => {
    joke.like = bool;
    return joke;
  }

  const updateLikes = (joke, bool, index) => {
    const newJoke = setLike(joke, bool);
    let updatedJokes = jokes.slice();
    updatedJokes.splice(index, 1, newJoke);
    setJokes(updatedJokes)
    console.log(jokes, 'line 37')
  }

  useEffect(() => {
    getJokes();
  }, []);

  return (
    <div className="App">
      Ready for a funny joke?
      <div className="joke">{ jokes.length ? jokes[rando].joke : `¯\_(ツ)_/¯`}</div>
      {jokes.length && jokes[rando].like ? <p>	&#128514;</p> : null}
      <button onClick={() => updateLikes(jokes[rando], true, rando)}>Like</button>
      <button onClick={() => updateLikes(jokes[rando], false, rando)}>Dislike</button>
      <button onClick={() => setRando(randomNum(jokes.length -1))}>Different joke?</button>
      <input onChange={(e) => setTerm(e.target.value)}></input>
      <button onClick={() => getJokes(term)}>Search for specific joke</button>
    </div>
  );
}

export default App;
