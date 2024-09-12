import {Product} from "./Product"
import {ReceiptPrinter} from "../ReceiptPrinter";

export class Discount {

    constructor(public readonly product: Product,
                public readonly description: string,
                public readonly discountAmount: number) {
    }

    public print(columns: number) : string {
        const productPresentation = this.product.name;
        const pricePresentation = ReceiptPrinter.format2Decimals(this.discountAmount);
        const description = this.description;
        const receiptPrinter = ReceiptPrinter.getWhitespace(columns - 3 - productPresentation.length - description.length - pricePresentation.length)
        return `${description}(${productPresentation})${receiptPrinter}-${pricePresentation}\n`
    }
}
