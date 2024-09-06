class OrderApprovalRequest {
  private readonly orderId: number;
  private approved: boolean;

  constructor(orderId: number) {
    this.orderId = orderId;
    this.approved = false;
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

