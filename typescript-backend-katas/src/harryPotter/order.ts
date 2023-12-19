export class Order {
  #BOOK_PRICE: number = 8;
  getTotalPrice(books: number[]): number {
    return books.length * this.#BOOK_PRICE;
  }
}
