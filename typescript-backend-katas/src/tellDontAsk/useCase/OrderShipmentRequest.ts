class OrderShipmentRequest {
  private orderId: number;

  constructor() {
      this.orderId = null;
  }

  public setOrderId(orderId: number): void {
      this.orderId = orderId;
  }

  public getOrderId(): number {
      return this.orderId;
  }
}

export default OrderShipmentRequest;
