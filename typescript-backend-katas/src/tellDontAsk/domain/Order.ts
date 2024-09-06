import OrderItem from './OrderItem';
import {OrderStatus} from './OrderStatus';

class Order {
  private total: number;
  private currency: string;
  private items: OrderItem[];
  private tax: number;
  private status: OrderStatus;
  private id: number;

  constructor(currency: string, items: OrderItem[]) {
    const total = items.reduce((sum, item) => sum + item.getTaxedAmount(), 0)
    const totalTax = items.reduce((sum, item) => sum + item.getTax(), 0)
    this.total = total;
    this.tax = totalTax;
    this.status = OrderStatus.CREATED;
    this.currency = currency;
    this.items = items;
  }

  public getTotal(): number {
    return this.total;
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

  public getStatus(): OrderStatus {
    return this.status;
  }

  public setStatus(status: OrderStatus): void {
    this.status = status;
  }

  public getId(): number {
    return this.id;
  }

  public setId(id: number): void {
    this.id = id;
  }
}

export default Order;

