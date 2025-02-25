import fetch from 'node-fetch';

export async function get(term) {
  // Get a joke from https://icanhazdadjoke.com/. The API is documented here: https://icanhazdadjoke.com/api

  try {
    const res = await fetch(`https://icanhazdadjoke.com/search${term ? `?term=${term}` : ''}`, { headers: { 'Accept': 'application/json'}});
    const joke = await res.json();
    return joke.results;
  } catch (e) {
    console.error('line 12', e)
    return 'Bad joke'
  }
  // Just return the joke.
}