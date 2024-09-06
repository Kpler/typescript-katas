import Category from './Category';

class Product {
  constructor(
      private name: string,
      private price: number,
      private category: Category) {
  }

  public getName(): string {
    return this.name;
  }

  public getPrice(): number {
    return this.price;
  }

  public getCategory(): Category {
    return this.category;
  }

  public computeUnitaryTax(): number {
    return Math.round(this.price / 100 * this.category.getTaxPercentage() * 100) / 100;
  }

  public computeUnitaryTaxedAmount(): number {
    const unitaryTax = this.computeUnitaryTax();
    return Math.round((this.price + unitaryTax) * 100) / 100;
  }


  // const taxedAmount: number = Math.round(unitaryTaxedAmount * itemRequest.getQuantity() * 100) / 100;
  // const taxAmount: number = unitaryTax * itemRequest.getQuantity();
}

export default Product;

