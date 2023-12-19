import { Order } from "./order";

describe("When ordering different books", () => {
  it("should pay 0$ when there are no books", () => {
    // Given
    const order = new Order();
    // When
    const totalPrice = order.getCartPrice([]);
    // Then
    expect(totalPrice).toBe(0);
  });

  it("should pay 8$ when there is one book", () => {
    // Given
    const order = new Order();
    // When
    const totalPrice = order.getCartPrice([1]);
    // Then
    expect(totalPrice).toBe(8);
  });

  it("should pay 15.2$ when ordered two different books", () => {
    // Given
    const order = new Order();
    // When
    const totalPrice = order.getCartPrice([1, 2]);
    // Then
    expect(totalPrice).toBe(15.2);
  });

  it("should pay 21.6$ when ordered 3 different books", () => {
    // Given
    const order = new Order();
    // When
    const totalPrice = order.getCartPrice([1, 2, 3]);
    // Then
    expect(totalPrice).toBe(21.6);
  });

  it("should pay 25.6$ when ordered 4 different books", () => {
    // Given
    const order = new Order();
    // When
    const totalPrice = order.getCartPrice([1, 2, 3, 4]);
    // Then
    expect(totalPrice).toBe(25.6);
  });

  it("should pay 30$ when ordered 5 different books", () => {
    // Given
    const order = new Order();
    // When
    const totalPrice = order.getCartPrice([1, 2, 3, 4, 5]);
    // Then
    expect(totalPrice).toBe(30);
  });
});

describe("When ordering the same books", () => {
  it("should pay 0$ when there are no books", () => {
    // Given
    const order = new Order();
    // When
    const totalPrice = order.getCartPrice([]);
    // Then
    expect(totalPrice).toBe(0);
  });

  it("should pay 8$ when there is one book", () => {
    // Given
    const order = new Order();
    // When
    const totalPrice = order.getCartPrice([1]);
    // Then
    expect(totalPrice).toBe(8);
  });

  it("should pay 16$ when ordered the same book twice", () => {
    // Given
    const order = new Order();
    // When
    const totalPrice = order.getCartPrice([1, 1]);
    // Then
    expect(totalPrice).toBe(16);
  });

  it("should pay 24$ when ordered the same book three times", () => {
    // Given
    const order = new Order();
    // When
    const totalPrice = order.getCartPrice([1, 1, 1]);
    // Then
    expect(totalPrice).toBe(24);
  });

  it("should pay 32$ when ordered the same book four times", () => {
    // Given
    const order = new Order();
    // When
    const totalPrice = order.getCartPrice([1, 1, 1, 1]);
    // Then
    expect(totalPrice).toBe(32);
  });

  it("should pay 23.2$ when ordered the same book twice and one extra", () => {
    // Given
    const order = new Order();
    // When
    const totalPrice = order.getCartPrice([1, 1, 2]);
    // Then
    expect(totalPrice).toBe(15.2 + 8); // 15.2 with discount for (1,2) and 8 for (1)
  });
});

