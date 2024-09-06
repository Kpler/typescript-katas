import {ProductCatalog} from "../repository/ProductCatalog";
import Product from "../domain/Product";


class InMemoryProductCatalog implements ProductCatalog {
  private products: Product[];

  public constructor(products: Product[]) {
    this.products = products;
  }

  public getByName(name: string): Product {
    return this.products.find(p => p.getName() === name);
  }
}

export default InMemoryProductCatalog;
