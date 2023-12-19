import { Order } from "./order";

describe("When ordering books", () => {
  it("should pay 0$ when there are no books", () => {
    // Given
    const order = new Order();
    // When
    const totalPrice = order.getTotalPrice([]);
    // Then
    expect(totalPrice).toBe(0);
  });

  it("should pay 8$ when there is one book", () => {
    // Given
    const order = new Order();
    // When
    const totalPrice = order.getTotalPrice([1]);
    // Then
    expect(totalPrice).toBe(8);
  });
});


