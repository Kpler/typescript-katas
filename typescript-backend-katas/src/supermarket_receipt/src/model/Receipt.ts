import { Discount } from "./Discount"
import { DiscountBundleInCatalog } from "./DiscountBundle";
import { Product } from "./Product"
import { ReceiptItem } from "./ReceiptItem"
import * as _ from "lodash"

export class Receipt {
    private items: ReceiptItem[] = [];
    private discounts: Discount[] = [];
    private discountBundleInCatalogs: DiscountBundleInCatalog[] = [];

    public getTotalPrice(): number {
        let total = 0.0;
        for (let item of this.items) {
            total += item.totalPrice;
        }
        for (let discount of this.discounts) {
            total -= discount.discountAmount;
        }
        for (let discountBundleInCatalog of this.discountBundleInCatalogs) {
            total -= discountBundleInCatalog.discountAmount;
        }
        return total;
    }

    public addProduct(p: Product, quantity: number, price: number, totalPrice: number): void {
        this.items.push(new ReceiptItem(p, quantity, price, totalPrice));
    }

    public getItems(): ReceiptItem[] {
        return _.clone(this.items);
    }

    public addDiscount(discount: Discount): void {
        this.discounts.push(discount);
    }

    public getDiscounts(): Discount[] {
        return this.discounts;
    }

    public addDiscountBundleInCatalog(discountBundleInCatalog: DiscountBundleInCatalog): void {
        this.discountBundleInCatalogs.push(discountBundleInCatalog);
    }
}
