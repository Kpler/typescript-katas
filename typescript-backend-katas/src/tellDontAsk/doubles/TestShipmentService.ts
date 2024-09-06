import {ShipmentService} from "../service/ShipmentService";
import Order from "../domain/Order";


class TestShipmentService implements ShipmentService {
  private shippedOrder: Order = null;

  public getShippedOrder(): Order {
    return this.shippedOrder;
  }

  public ship(order: Order): void {
    this.shippedOrder = order;
  }
}

export default TestShipmentService;
