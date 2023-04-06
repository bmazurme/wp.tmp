class Collection {
  key: Promise<unknown>;

  constructor() {
    this.key = new Promise((resolve, reject) => {
      setTimeout(() => resolve(new Date()), 3000);
    });
  }

  get(x: number) {
    this.key
      .then(
        (result) => setTimeout(() => console.log(`${result}-${x}`), 1000), // сработает
        // error => console.log("Rejected: " + error) // не сработает
      );
  }
}

const collection = new Collection();

export default collection;
