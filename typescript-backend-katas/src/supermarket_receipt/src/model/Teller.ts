import {SupermarketCatalog} from "./SupermarketCatalog"
import {OffersByProduct, ShoppingCart} from "./ShoppingCart"
import {Product} from "./Product"
import {Receipt} from "./Receipt"
import {Offer} from "./Offer"
import {SpecialOfferType} from "./SpecialOfferType"

export class Teller {

    private offers: OffersByProduct = {};

    public constructor(private readonly catalog: SupermarketCatalog ) {
    }

    public addSpecialOffer(offerType: SpecialOfferType , product: Product, argument: number): void {
        this.offers[product.name] = new Offer(offerType, product, argument);
    }

    public checksOutArticlesFrom(theCart: ShoppingCart): Receipt {
        const receipt = new Receipt();

        receipt.addProductQuantities(theCart.getItems(), this.catalog);
        theCart.handleOffers(receipt, this.offers, this.catalog);

        return receipt;
    }

}
