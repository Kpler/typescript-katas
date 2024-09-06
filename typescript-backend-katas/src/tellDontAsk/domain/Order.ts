import OrderItem from './OrderItem';
import {OrderStatus} from './OrderStatus';
import ShippedOrdersCannotBeChangedException from "./ShippedOrdersCannotBeChangedException";
import RejectedOrderCannotBeApprovedException from "./RejectedOrderCannotBeApprovedException";
import ApprovedOrderCannotBeRejectedException from "./ApprovedOrderCannotBeRejectedException";
import UnknownProductException from "./UnknownProductException";
import DomainSellItemRequst from "./DomainSellItemRequst";

class Order {
  private total: number;
  private currency: string;
  private items: OrderItem[];
  private tax: number;
  private status: OrderStatus;
  private id: number;

  public constructor(

  ) {
    this.items = [];
    this.currency = 'EUR';
    this.total = 0;
    this.tax = 0;
    this.status = OrderStatus.CREATED;
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

  public addItem(product: any, itemRequest: DomainSellItemRequst): void {
    if (product === undefined) {
      throw new UnknownProductException();
    } else {
      const orderItem: OrderItem = new OrderItem(
          product,
          itemRequest
      );

      this.items.push(orderItem);

      this.total = (this.getTotal() + orderItem.getTaxedAmount());
      this.tax = this.getTax() + orderItem.getTax();
    }
  }
}

export default Order;

