export class Order {
    #BOOK_PRICE: number = 8;
    #DISCOUNT_FOR_1: number = 0;
    #DISCOUNT_FOR_2: number = 0.05;
    #DISCOUNT_FOR_3: number = 0.10;
    #DISCOUNT_FOR_4: number = 0.20;
    #DISCOUNT_FOR_5: number = 0.25;

    #DISCOUNT_MAP: Map<number, number> = new Map([
        [1, this.#DISCOUNT_FOR_1],
        [2, this.#DISCOUNT_FOR_2],
        [3, this.#DISCOUNT_FOR_3],
        [4, this.#DISCOUNT_FOR_4],
        [5, this.#DISCOUNT_FOR_5]
    ])

    getCartPrice(books: number[]): number {
        const uniqueBooks = new Set(books);
        const discount = this.#DISCOUNT_MAP.get(uniqueBooks.size) ?? 0;
        return this.#getFullPrice(uniqueBooks.size) * (1 - discount);
    }

    #getFullPrice(booksCount: number) {
        return this.#BOOK_PRICE * booksCount;
    }
}
