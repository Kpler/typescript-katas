import {Product} from "./Product"
import {ReceiptPrinter} from "../ReceiptPrinter";
import {ProductUnit} from "./ProductUnit";

export class ReceiptItem {

    public constructor(public readonly product: Product,
                       public readonly quantity: number,
                       public readonly price: number,
                       public totalPrice: number) {
    }

    public print(columns: number): string {
        const price = ReceiptPrinter.format2Decimals(this.totalPrice);
        const quantity = this.presentQuantity()
        const name = this.product.name;
        const unitPrice = ReceiptPrinter.format2Decimals(this.price);
        const whitespaceSize = columns - name.length - price.length;

        const moreThan1ItemText = `  ${unitPrice} * ${quantity}\n`;
        return `${name}${ReceiptPrinter.getWhitespace(whitespaceSize)}${price}\n${this.quantity != 1 ? moreThan1ItemText : ""}`
    }

    private presentQuantity(): string  {
        return ProductUnit.Each == this.product.unit
            // TODO make sure this is the simplest way to make something similar to the java version
            ? new Intl.NumberFormat('en-UK', {maximumFractionDigits: 0}).format(this.quantity)
            : new Intl.NumberFormat('en-UK', {minimumFractionDigits: 3}).format(this.quantity);
    }
}
