import OrderItem from './OrderItem';
import {OrderStatus} from './OrderStatus';

class Order {
  private total: number;
  private readonly currency: string;
  private readonly items: OrderItem[];
  private tax: number;
  private status: OrderStatus;
  private readonly id: number;

  public constructor(id: number) {
    this.total = 0;
    this.currency = "EUR";
    this.items = [];
    this.tax = 0;
    this.status = OrderStatus.CREATED;
    this.id = id;
  }

  public getTotal(): number {
    return this.total;
  }

  public setTotal(total: number): void {
    this.total = total;
  }

  public getCurrency(): string {
    return this.currency;
  }

  public getItems(): OrderItem[] {
    return this.items;
  }

  public getTax(): number {
    return this.tax;
  }

  public setTax(tax: number): void {
    this.tax = tax;
  }

  public getStatus(): OrderStatus {
    return this.status;
  }

  public setStatus(status: OrderStatus): void {
    this.status = status;
  }

  public getId(): number {
    return this.id;
  }
}

export default Order;

