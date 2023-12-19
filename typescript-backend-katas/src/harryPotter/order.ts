export class Order {
  #BOOK_PRICE: number = 8;
  #DISCOUNT_FOR_2: number = 0.05;
  #DISCOUNT_FOR_3: number = 0.10;

  getTotalPrice(books: number[]): number {
    const uniqueBooks = new Set(books);

    switch (uniqueBooks.size) {
        case 2 : {
          return this.#getUnitPrice(uniqueBooks.size);
        }
        case 3: {
          return this.#BOOK_PRICE * uniqueBooks.size * (1 - this.#DISCOUNT_FOR_3);
        }
        default: return uniqueBooks.size * this.#BOOK_PRICE;
    }
  }

  #getUnitPrice(uniqueBooksCount: number) {
    return this.#BOOK_PRICE * uniqueBooksCount * (1 - this.#DISCOUNT_FOR_2);
  }
}
