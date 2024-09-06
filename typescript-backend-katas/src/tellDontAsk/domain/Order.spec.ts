import OrderCannotBeShippedException from "../useCase/OrderCannotBeShippedException";
import Order from "./Order";
import { OrderStatus } from "./OrderStatus";

describe('Order.validateCanBeShipped', () => {
    it('it should not raise an exception OrderStatus is APPROVED', () => {
        let mockOrder = new Order();
        mockOrder.setStatus(OrderStatus.APPROVED);

        expect(mockOrder.validateCanBeShipped());
    });
    it('it should throw OrderCannotBeShippedException when OrderStatus is CREATED', () => {
        let mockOrder = new Order();
        mockOrder.setStatus(OrderStatus.CREATED);

        expect(() => mockOrder.validateCanBeShipped()).toThrow(OrderCannotBeShippedException);
    });
}
)