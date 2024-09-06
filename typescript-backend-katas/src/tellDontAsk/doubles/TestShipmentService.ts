import Order from '../domain/Order';
import { ShipmentService } from '../service/ShipmentService';

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
