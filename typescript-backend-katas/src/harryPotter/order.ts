export class Order {
    #BOOK_PRICE: number = 8;
    #DISCOUNT_FOR_2: number = 0.05;
    #DISCOUNT_FOR_3: number = 0.10;

    #DISCOUNT_MAP: Map<number, number> = new Map([
        [1, 0],
        [2, this.#DISCOUNT_FOR_2],
        [3, this.#DISCOUNT_FOR_3]
    ])

    getCartPrice(books: number[]): number {
        const uniqueBooks = new Set(books);
        return this.#getFullPrice(uniqueBooks.size) * (1 - (this.#DISCOUNT_MAP.get(uniqueBooks.size) ?? 0));
    }

    #getFullPrice(booksCount: number) {
        return this.#BOOK_PRICE * booksCount;
    }
}
