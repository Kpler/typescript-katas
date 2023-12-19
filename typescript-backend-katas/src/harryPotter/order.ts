export class Order {
  #BOOK_PRICE: number = 8;
  getTotalPrice(books: number[]): number {
    const uniqueBooks = new Set(books);

    if (uniqueBooks.size === 2) {
      return this.#BOOK_PRICE * 2 * 0.95;
    }

    return books.length * this.#BOOK_PRICE;
  }
}
