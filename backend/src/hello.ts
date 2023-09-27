export class Hello {
  constructor(private name: String) {}

  getHello() {
    return `Hello ${this.name}`;
  }
}
