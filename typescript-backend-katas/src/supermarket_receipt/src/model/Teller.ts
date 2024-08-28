import { SupermarketCatalog } from "./SupermarketCatalog"
import { OffersByProduct, ShoppingCart } from "./ShoppingCart"
import { Product } from "./Product"
import { Receipt } from "./Receipt"
import { Offer } from "./Offer"
import { SpecialOfferType } from "./SpecialOfferType"
import { DiscountBundle, DiscountBundleInCatalog } from "./DiscountBundle";
import { sum } from "lodash"

export class Teller {

    private offers: OffersByProduct = {};
    private bundles: DiscountBundle[] = [];

    public constructor(private readonly catalog: SupermarketCatalog) {
    }

    public addSpecialOffer(offerType: SpecialOfferType, product: Product, argument: number): void {
        this.offers[product.name] = new Offer(offerType, product, argument);
    }

    public addBundleOffer(bundle: DiscountBundle): void {
        this.bundles.push(bundle);
    }

    calculateBundleDiscountAmount(bundle: DiscountBundle): DiscountBundleInCatalog {
        let sumAmount = 0;
        for (let product of bundle.products) {
            let unitPrice = this.catalog.getUnitPrice(product);
            sumAmount = sumAmount + (unitPrice * bundle.rate / 100);
        }
        return new DiscountBundleInCatalog(bundle, sumAmount);
    }

    public checksOutArticlesFrom(theCart: ShoppingCart): Receipt {
        const receipt = new Receipt();
        const productQuantities = theCart.getItems();
        for (let pq of productQuantities) {
            let p = pq.product;
            let quantity = pq.quantity;
            let unitPrice = this.catalog.getUnitPrice(p);
            let price = quantity * unitPrice;
            receipt.addProduct(p, quantity, unitPrice, price);
        }

        // TODO: Add a check which bundles are appliable.
        if (this.bundles.length > 0) {
            this.bundles.map((bundle) => {
                receipt.addDiscountBundleInCatalog(
                    this.calculateBundleDiscountAmount(bundle));
            })
            theCart.handleOffers(receipt, this.offers, this.catalog);
        }

        return receipt;
    }

}
