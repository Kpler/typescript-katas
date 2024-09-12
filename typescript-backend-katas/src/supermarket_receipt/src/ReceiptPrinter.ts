import {Receipt} from "./model/Receipt"

export class ReceiptPrinter {

    public constructor(private readonly columns: number = 40) {
    }

    public printReceipt( receipt: Receipt): string {
        let result = "";
        for (const item of receipt.getItems()) {
            result += item.print(this.columns);
        }
        for (const discount of receipt.getDiscounts()) {
            result += discount.print(this.columns)
        }
        result += "\n";
        let pricePresentation = ReceiptPrinter.format2Decimals(receipt.getTotalPrice());
        let total = "Total: ";
        let whitespace = ReceiptPrinter.getWhitespace(this.columns - total.length - pricePresentation.length);
        result += total;
        result += whitespace;
        result += pricePresentation;

        return result;
    }

    public static format2Decimals(number: number) {
        return new Intl.NumberFormat('en-UK', {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2
        }).format(number)
    }


    public static getWhitespace(whitespaceSize: number): string {
        return " ".repeat(whitespaceSize);
    }
}
