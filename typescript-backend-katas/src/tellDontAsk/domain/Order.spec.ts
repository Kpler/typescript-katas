import Order from "./Order";
import { OrderStatus } from "./OrderStatus";

describe('Order', () => {
    it('it should return true when OrderStatus is APPROVED', () => {
        let mockOrder = new Order();
        mockOrder.setStatus(OrderStatus.APPROVED);

        expect(mockOrder.canBeShipped()).toBe(true);
    });
    it('it should return false when OrderStatus is CREATED', () => {
        let mockOrder = new Order();
        mockOrder.setStatus(OrderStatus.CREATED);

        expect(mockOrder.canBeShipped()).toBe(false);
    });
}
)