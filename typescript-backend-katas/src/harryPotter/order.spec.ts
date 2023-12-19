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

  it("should pay 15.2$ when ordered two different books", () => {
    // Given
    const order = new Order();
    // When
    const totalPrice = order.getTotalPrice([1, 2]);
    // Then
    expect(totalPrice).toBe(15.2);
  });

  it("should pay 21.6$ when ordered 3 different books", () => {
    // Given
    const order = new Order();
    // When
    const totalPrice = order.getTotalPrice([1, 2, 3]);
    // Then
    expect(totalPrice).toBe(21.6);
  });
});


