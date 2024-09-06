import Product from './Product';
import DomainSellItemRequst from "./DomainSellItemRequst";

class OrderItem {
  private readonly product: Product;
  private readonly quantity: number;
  private readonly taxedAmount: number;
  private readonly tax: number;

  public constructor(
      product: Product,
      itemRequest: DomainSellItemRequst,
  ) {

    const unitaryTax = Math.round(product.getPrice() / 100 * product.getCategory().getTaxPercentage() * 100) / 100
    const unitaryTaxedAmount: number = Math.round((product.getPrice() + unitaryTax) * 100) / 100;
    const taxedAmount: number = Math.round(unitaryTaxedAmount * itemRequest.getQuantity() * 100) / 100;
    const taxAmount: number = unitaryTax * itemRequest.getQuantity();

    this.product = product;
    this.quantity = itemRequest.getQuantity();
    this.tax = taxAmount;
    this.taxedAmount = taxedAmount;
  }

  public getProduct(): Product {
    return this.product;
  }

  public getQuantity(): number {
      return this.quantity;
  }

  public getTaxedAmount(): number {
    return this.taxedAmount;
  }

  public getTax(): number {
    return this.tax;
  }
}

export default OrderItem;

