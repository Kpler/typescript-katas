import Product from './Product';
import product from "./Product";
import product from "./Product";
import SellItemRequest from "../useCase/SellItemRequest";

class OrderItem {
  private product: Product;
  private quantity: number;
  private taxedAmount: number;
  private tax: number;

  constructor(product: Product, itemRequest: SellItemRequest) {
    this.product = product;
    this.quantity = itemRequest.getQuantity();
    this.taxedAmount = Math.round(product.computeUnitaryTaxedAmount() * itemRequest.getQuantity() * 100) / 100;
    this.tax = product.computeUnitaryTax() * itemRequest.getQuantity();
  }

  public getProduct(): Product {
    return this.product;
  }

  public setProduct(product: Product): void {
    this.product = product;
  }

  public getQuantity(): number {
      return this.quantity;
  }

  public setQuantity(quantity: number): void {
    this.quantity = quantity;
  }

  public getTaxedAmount(): number {
    return this.taxedAmount;
  }

  public setTaxedAmount(taxedAmount: number): void {
    this.taxedAmount = taxedAmount;
  }

  public getTax(): number {
    return this.tax;
  }

  public setTax(tax: number): void {
    this.tax = tax;
  }
}

export default OrderItem;

