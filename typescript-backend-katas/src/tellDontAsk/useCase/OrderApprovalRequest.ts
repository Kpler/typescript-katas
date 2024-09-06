class OrderApprovalRequest {
  private orderId: number;
  private approved: boolean;

  constructor() {
    this.orderId = null;
    this.approved = false;
  }

  public  setOrderId(orderId: number): void {
    this.orderId = orderId;
  }

  public getOrderId(): number {
    return this.orderId;
  }

  public approveRequest(): void {
      this.approved = true;
  }

  public isApproved(): boolean{
    return this.approved;
  }
}

export default OrderApprovalRequest;

