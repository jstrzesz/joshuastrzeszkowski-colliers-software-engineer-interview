export default class Joke {
  constructor(id, text) {
    this.id = id;
    this.text = text;
  }

  toJSON() {
    return {
      type: 'joke',
      id: this.id,
      attributes: {
        joke: this.text,
      },
    };
  }
}
