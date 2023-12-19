import { Order } from "./order";

describe("When ordering books", () => {
  it("should pay 0 when there are no books", () => {
    // Given
    const order = new Order();
    // When
    const totalPrice = order.getTotalPrice([]);
    // Then
    expect(totalPrice).toBe(0);
  });
});


