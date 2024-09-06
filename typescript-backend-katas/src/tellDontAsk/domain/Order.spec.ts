import Order from "./Order";
import { OrderStatus } from "./OrderStatus";

describe('Order' , () => {
        it('it should return false when OrderStatus is CREATED', () => {
            let mockOrder = new Order();
            mockOrder.setStatus(OrderStatus.CREATED);

            expect(Order.canBeShipped()===false);
        });
    }
)