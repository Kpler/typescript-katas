import {Product} from "./Product"
import {SupermarketCatalog} from "./SupermarketCatalog"
import * as _ from "lodash"
import {ProductQuantity} from "./ProductQuantity"
import {Discount} from "./Discount"
import {Receipt} from "./Receipt"
import {Offer} from "./Offer"
import {SpecialOfferType} from "./SpecialOfferType"

type ProductQuantities = { [productName: string]: ProductQuantity }
export type OffersByProduct = { [productName: string]: Offer };

export class ShoppingCart {

    private readonly items: ProductQuantity[] = [];
    _productQuantities: ProductQuantities = {};


    getItems(): ProductQuantity[] {
        return _.clone(this.items);
    }

    addItem(product: Product): void {
        this.addItemQuantity(product, 1.0);
    }

    productQuantities(): ProductQuantities {
        return this._productQuantities;
    }


    public addItemQuantity(product: Product, quantity: number): void {
        let productQuantity = new ProductQuantity(product, quantity)
        this.items.push(productQuantity);
        let currentQuantity = this._productQuantities[product.name]
        if (currentQuantity) {
            this._productQuantities[product.name] = this.increaseQuantity(product, currentQuantity, quantity);
        } else {
            this._productQuantities[product.name] = productQuantity;
        }

    }

    private increaseQuantity(product: Product, productQuantity: ProductQuantity, quantity: number) {
        return new ProductQuantity(product, productQuantity.quantity + quantity)
    }

    handleOffers(receipt: Receipt, offers: OffersByProduct, catalog: SupermarketCatalog): void {
        for (const productName in this.productQuantities()) {
            const productQuantity = this._productQuantities[productName]
            if (offers[productName]) {
                const offer: Offer = offers[productName];
                const unitPrice: number = catalog.getUnitPrice(productQuantity.product);
                const discount = this.calculateDiscount(offer, unitPrice, productQuantity)
                if (discount != null)
                    receipt.addDiscount(discount);
            }

        }
    }

    private calculateDiscount(offer: Offer, unitPrice: number, productQuantity: ProductQuantity): Discount | null {
        const quantity = productQuantity.quantity;
        let discount: Discount | null = null;
        let x = 1;
        if (offer.offerType == SpecialOfferType.ThreeForTwo) {
            x = 3;

        } else if (offer.offerType == SpecialOfferType.TwoForAmount) {
            discount = this.applyDiscountTwoForAmount(offer, unitPrice, productQuantity)
        }
        if (offer.offerType == SpecialOfferType.FiveForAmount) {
            x = 5;
        }

        const numberOfXs = Math.floor(quantity / x);
        if (offer.offerType == SpecialOfferType.ThreeForTwo && quantity > 2) {
            const discountAmount = productQuantity.quantity * unitPrice - ((numberOfXs * 2 * unitPrice) + quantity % 3 * unitPrice);
            discount = new Discount(productQuantity.product, "3 for 2", discountAmount);
        }
        if (offer.offerType == SpecialOfferType.TenPercentDiscount) {
            discount = new Discount(productQuantity.product, offer.argument + "% off", productQuantity.quantity * unitPrice * offer.argument / 100.0);
        }
        if (offer.offerType == SpecialOfferType.FiveForAmount && quantity >= 5) {
            const discountTotal = unitPrice * productQuantity.quantity - (offer.argument * numberOfXs + quantity % 5 * unitPrice);
            discount = new Discount(productQuantity.product, x + " for " + offer.argument, discountTotal);
        }

        return discount;
    }

    private applyDiscountTwoForAmount(offer: Offer, unitPrice: number, productQuantity: ProductQuantity) {
        const quantity = productQuantity.quantity;
        if (quantity >= 2) {
            const total = offer.argument * Math.floor(quantity / 2) + quantity % 2 * unitPrice;
            const discountN = unitPrice * productQuantity.quantity - total;
            return new Discount(productQuantity.product, "2 for " + offer.argument, discountN);
        } else {
            return null
        }
    }
}
