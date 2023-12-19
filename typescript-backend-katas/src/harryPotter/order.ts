export class Order {
  #BOOK_PRICE: number = 8;
  #DISCOUNT_OF_5: number = 0.05;
  #DISCOUNT_OF_10: number = 0.10;

  getTotalPrice(books: number[]): number {
    const uniqueBooks = new Set(books);

    switch (uniqueBooks.size) {
        case 2 : {
          return this.#BOOK_PRICE * 2 * (1 - this.#DISCOUNT_OF_5);      
        }
        case 3: {
          return this.#BOOK_PRICE * 3 * (1 - this.#DISCOUNT_OF_10);
        }
        default: return books.length * this.#BOOK_PRICE;
    }
    
  }
}
