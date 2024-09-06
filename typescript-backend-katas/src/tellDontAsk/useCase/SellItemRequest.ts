class SellItemRequest {
    constructor(
        private productName: string,
        private quantity: number,
    ) {
    }

    public setQuantity(quantity: number): void {
        this.quantity = quantity;
    }

    public setProductName(productName: string): void {
        this.productName = productName;
    }

    public getQuantity(): number {
        return this.quantity;
    }

    public getProductName(): string {
        return this.productName;
    }
}

export default SellItemRequest;
