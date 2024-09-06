import OrderItem from './OrderItem';
import {OrderStatus} from './OrderStatus';
import ShippedOrdersCannotBeChangedException from "../useCase/ShippedOrdersCannotBeChangedException";
import RejectedOrderCannotBeApprovedException from "../useCase/RejectedOrderCannotBeApprovedException";
import ApprovedOrderCannotBeRejectedException from "../useCase/ApprovedOrderCannotBeRejectedException";

class Order {
  private total: number;
  private currency: string;
  private items: OrderItem[];
  private tax: number;
  private status: OrderStatus;
  private id: number;

  public getTotal(): number {
    return this.total;
  }

  public setTotal(total: number): void {
    this.total = total;
  }

  public getCurrency(): string {
    return this.currency;
  }

  public setCurrency(currency: string): void {
    this.currency = currency;
  }

  public getItems(): OrderItem[] {
    return this.items;
  }

  public setItems(items: OrderItem[]): void {
    this.items = items;
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

  public goToNextStatus(isApproved: boolean): void {
    if (this.getStatus() === OrderStatus.SHIPPED) {
      throw new ShippedOrdersCannotBeChangedException();
    }

    if (isApproved && this.getStatus() === OrderStatus.REJECTED) {
      throw new RejectedOrderCannotBeApprovedException();
    }

    if (!isApproved && this.getStatus() === OrderStatus.APPROVED) {
      throw new ApprovedOrderCannotBeRejectedException();
    }

    this.status = isApproved ? OrderStatus.APPROVED : OrderStatus.REJECTED
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

