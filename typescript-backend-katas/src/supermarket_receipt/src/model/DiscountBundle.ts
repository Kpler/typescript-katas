import { Product } from "./Product"

export class DiscountBundle {

    constructor(public readonly products: Product[],
        public readonly description: string,
        public readonly rate: number
    ) {
    }
}

export class DiscountBundleInCatalog {
    constructor(public readonly discountBundle: DiscountBundle,
                public readonly discountAmount: number) { }
}