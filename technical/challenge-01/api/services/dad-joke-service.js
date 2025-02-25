import fetch from 'node-fetch';

export async function get() {
  // Get a joke from https://icanhazdadjoke.com/. The API is documented here: https://icanhazdadjoke.com/api

  try {
    const res = await fetch('https://icanhazdadjoke.com/search', { headers: { 'Accept': 'application/json'}});
    const joke = await res.json();
    console.log(joke.results, 'line 10');
    return joke.results;
  } catch (e) {
    console.error('line 12', e)
    return 'Bad joke'
  }
  // Just return the joke.
}
