import {Product} from "./Product"
import {SupermarketCatalog} from "./SupermarketCatalog"
import * as _ from "lodash"
import {ProductQuantity} from "./ProductQuantity"
import {Discount} from "./Discount"
import {Receipt} from "./Receipt"
import {Offer} from "./Offer"
import {SpecialOfferType, SpecialOfferTypeUnit} from "./SpecialOfferType"

type ProductQuantities = { [productName: string]: ProductQuantity }
export type OffersByProduct = {[productName: string]: Offer};

export class ShoppingCart {

    private readonly  items: ProductQuantity[] = [];
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

    handleOffers(receipt: Receipt,  offers: OffersByProduct, catalog: SupermarketCatalog ):void {
        for (const productName in this.productQuantities()) {
            const productQuantity = this._productQuantities[productName]
            const product = productQuantity.product;
            const quantity: number = this._productQuantities[productName].quantity;
            if (offers[productName]) {
                const offer : Offer = offers[productName];
                const unitPrice: number= catalog.getUnitPrice(product);
                const discount : Discount|null = this.calculateDiscount(offer, unitPrice, quantity, product);
                if (discount != null)
                    receipt.addDiscount(discount);
            }

        }
    }

    private calculateDiscount(offer: Offer, unitPrice: number, quantity: number, product: Product): Discount | null {
        let description: string|null = null;
        let discountAmount: number|null = null;

        const x: number = SpecialOfferTypeUnit.get(offer.offerType) || 1;
        if (offer.offerType == SpecialOfferType.TwoForAmount) {
            if (quantity >= 2) {
                const total = offer.argument * Math.floor(quantity / x) + quantity % 2 * unitPrice;
                discountAmount = unitPrice * quantity - total;
                description = "2 for " + offer.argument;
            }
        }
        const numberOfXs = Math.floor(quantity / x);
        if (offer.offerType == SpecialOfferType.ThreeForTwo && quantity > 2) {
            discountAmount = quantity * unitPrice - ((numberOfXs * 2 * unitPrice) + quantity % 3 * unitPrice);
            description = "3 for 2";
        }
        if (offer.offerType == SpecialOfferType.TenPercentDiscount) {
            description = offer.argument + "% off";
            discountAmount = quantity * unitPrice * offer.argument / 100.0;
        }
        if (offer.offerType == SpecialOfferType.FiveForAmount && quantity >= 5) {
            description = x + " for " + offer.argument;
            discountAmount = unitPrice * quantity - (offer.argument * numberOfXs + quantity % 5 * unitPrice);
        }

        if (discountAmount != null && description != null) {
            return new Discount(product, description, discountAmount);
        }
        return null;
    }
}
