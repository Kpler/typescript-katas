import SellItemRequest from './SellItemRequest';
import Product from './Product';

class OrderItem {
  private product: Product;
  private quantity: number;
  private taxedAmount: number;
  private tax: number;

  public constructor(itemRequest: SellItemRequest, product: Product) {
    const unitaryTax: number = Math.round(product.getPrice() / 100 * product.getCategory().getTaxPercentage() * 100) / 100;
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

