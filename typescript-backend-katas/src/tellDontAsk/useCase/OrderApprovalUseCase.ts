import Order from '../domain/Order';
import { OrderStatus } from '../domain/OrderStatus';
import OrderRepository from '../repository/OrderRepository';
import {ShippedOrdersCannotBeChangedException, ApprovedOrderCannotBeRejectedException, RejectedOrderCannotBeApprovedException} from '../utils/exceptions';
import OrderApprovalRequest from './OrderApprovalRequest';

class OrderApprovalUseCase {
  private readonly orderRepository: OrderRepository;

  public constructor(orderRepository: OrderRepository){
      this.orderRepository = orderRepository;
  }

  public run(request: OrderApprovalRequest): void {
      const order: Order = this.orderRepository.getById(request.getOrderId());

      if (order.isShipped()) {
          throw new ShippedOrdersCannotBeChangedException();
      }

      if (request.isApproved() && order.isRejected()) {
          throw new RejectedOrderCannotBeApprovedException();
      }

      if (!request.isApproved() && order.isApproved()) {
          throw new ApprovedOrderCannotBeRejectedException();
      }

      order.setStatus(request.isApproved() ? OrderStatus.APPROVED : OrderStatus.REJECTED);
      this.orderRepository.save(order);
  }
}

export default OrderApprovalUseCase
