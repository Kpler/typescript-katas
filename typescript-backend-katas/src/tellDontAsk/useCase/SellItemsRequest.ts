import SellItemRequest from "./SellItemRequest";

class SellItemsRequest {
  constructor(private requests: SellItemRequest[]) {
  }

  public getRequests(): SellItemRequest[] {
    return this.requests;
  }
}

export default SellItemsRequest;
