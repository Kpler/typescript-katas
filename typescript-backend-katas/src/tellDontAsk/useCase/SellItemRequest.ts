import DomainSellItemRequst from '../domain/DomainSellItemRequst';

class SellItemRequest {
  private quantity: number;
  private productName: string;

  public setQuantity(quantity: number): void{
      this.quantity = quantity;
  }

  public setProductName(productName: string): void {
      this.productName = productName;
  }

  public getQuantity(): number {
      return this.quantity;
  }

  public getProductName(): string {
      return this.productName;
  }

  public toDomain(): DomainSellItemRequst {
    const domainSellItemRequest = new DomainSellItemRequst();
    domainSellItemRequest.setQuantity(this.quantity);
    domainSellItemRequest.setProductName(this.productName);
    return domainSellItemRequest;
  }
}

export default SellItemRequest;
