import Order from '../domain/Order';
import { OrderStatus } from '../domain/OrderStatus';
import OrderRepository from '../repository/OrderRepository';
import ApprovedOrderCannotBeRejectedException from './ApprovedOrderCannotBeRejectedException';
import OrderApprovalRequest from './OrderApprovalRequest';
import RejectedOrderCannotBeApprovedException from './RejectedOrderCannotBeApprovedException';
import ShippedOrdersCannotBeChangedException from './ShippedOrdersCannotBeChangedException';

class OrderApprovalUseCase {
  private readonly orderRepository: OrderRepository;

  public constructor(orderRepository: OrderRepository){
      this.orderRepository = orderRepository;
  }

  public run(request: OrderApprovalRequest): void {
      const order: Order = this.orderRepository.getById(request.getOrderId());

      order.goToNextStatus(request.isApproved())
      this.orderRepository.save(order);
  }
}

export default OrderApprovalUseCase
