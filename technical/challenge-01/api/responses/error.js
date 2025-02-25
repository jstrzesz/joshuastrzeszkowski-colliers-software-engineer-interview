export default class Error {
  constructor(status, source, title, detail) {
    this.status = status;
    this.source = source;
    this.title = title;
    this.detail = detail;
  }

  toJSON() {
    return {
      status: this.status,
      source: { pointer: '' },
      title: this.title,
      detail: this.detail,
    };
  }
}
