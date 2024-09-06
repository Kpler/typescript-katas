import SellItemRequest from "../domain/SellItemRequest";

class SellRequest {
  private requests: SellItemRequest[];

  public setRequests(requests: SellItemRequest[]): void {
    this.requests = requests;
  }

  public getRequests(): SellItemRequest[] {
    return this.requests;
  }
}

export default SellRequest;
