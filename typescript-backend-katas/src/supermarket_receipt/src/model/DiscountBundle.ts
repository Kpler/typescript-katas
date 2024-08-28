import { Product } from "./Product"

export class DiscountBundle {

    constructor(public readonly products: Product[],
        public readonly description: string,
        public readonly rate: number
    ) {
    }
}