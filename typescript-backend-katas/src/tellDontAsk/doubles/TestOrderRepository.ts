import OrderRepository from "../repository/OrderRepository";
import Order from "../domain/Order";


class TestOrderRepository implements OrderRepository {
  #insertedOrder: Order;
  #orders: Order[];

  constructor() {
      this.#insertedOrder = null;
      this.#orders = [];
  }

  public getSavedOrder(): Order {
      return this.#insertedOrder;
  }

  public save(order: Order): void {
      this.#insertedOrder = order;
  }

  public getById(orderId: number): Order {
      return this.#orders.find(o => o.getId() == orderId);
  }

  public addOrder(order: Order): void {
      this.#orders.push(order);
  }
}

export default TestOrderRepository;

