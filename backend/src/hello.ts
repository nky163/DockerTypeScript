export class Hello {
  constructor(private name: string) {}

  getHello() {
    return `Hello ${this.name}`;
  }
}
