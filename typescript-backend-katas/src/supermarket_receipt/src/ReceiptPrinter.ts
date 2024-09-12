import {ProductUnit} from "./model/ProductUnit"
import {ReceiptItem} from "./model/ReceiptItem"
import {Receipt} from "./model/Receipt"
import {Discount} from "./model/Discount";

export class ReceiptPrinter {

    public constructor(private readonly columns: number = 40) {
    }

    public printReceipt( receipt: Receipt): string {
        let result = "";
        for (const item of receipt.getItems()) {
            result += this.printReceiptItem(item);
        }
        for (const discount of receipt.getDiscounts()) {
            result += this.printDiscount(discount)
        }
        result += "\n";
        let pricePresentation = this.format2Decimals(receipt.getTotalPrice());
        let total = "Total: ";
        let whitespace = ReceiptPrinter.getWhitespace(this.columns - total.length - pricePresentation.length);
        result += total;
        result += whitespace;
        result += pricePresentation;

        return result;
    }

    private format2Decimals(number: number) {
        return new Intl.NumberFormat('en-UK', {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2
        }).format(number)
    }

    private static presentQuantity( item: ReceiptItem): string  {
        return ProductUnit.Each == item.product.unit
            // TODO make sure this is the simplest way to make something similar to the java version
                ? new Intl.NumberFormat('en-UK', {maximumFractionDigits: 0}).format(item.quantity)
                : new Intl.NumberFormat('en-UK', {minimumFractionDigits: 3}).format(item.quantity);
    }

    private static getWhitespace(whitespaceSize: number): string {
        return " ".repeat(whitespaceSize);
    }

    private printDiscount(discount : Discount) : string {
        const productPresentation = discount.product.name;
        const pricePresentation = this.format2Decimals(discount.discountAmount);
        const description = discount.description;
        const receiptPrinter = ReceiptPrinter.getWhitespace(this.columns - 3 - productPresentation.length - description.length - pricePresentation.length)
        return `${description}(${productPresentation})${receiptPrinter}-${pricePresentation}\n`
    }

    private printReceiptItem(receiptItem: ReceiptItem): string {
        const price = this.format2Decimals(receiptItem.totalPrice);
        const quantity = ReceiptPrinter.presentQuantity(receiptItem);
        const name = receiptItem.product.name;
        const unitPrice = this.format2Decimals(receiptItem.price);
        const whitespaceSize = this.columns - name.length - price.length;

        const moreThan1ItemText = `  ${unitPrice} * ${quantity}\n`;
        return `${name}${ReceiptPrinter.getWhitespace(whitespaceSize)}${price}\n${receiptItem.quantity != 1 ? moreThan1ItemText : ""}`
    }
}
