import TestOrderRepository from '../doubles/TestOrderRepository';
import OrderApprovalUseCase from "./OrderApprovalUseCase";
import OrderApprovalRequest from "./OrderApprovalRequest";
import {OrderStatus} from "../domain/OrderStatus";
import Order from "../domain/Order";
import {RejectedOrderCannotBeApprovedException, ApprovedOrderCannotBeRejectedException, ShippedOrdersCannotBeChangedException } from "../utils/exceptions";

describe('OrderApprovalUseCase', () => {
  let orderRepository: TestOrderRepository;
  let useCase: OrderApprovalUseCase;

  beforeEach( () => {
    orderRepository = new TestOrderRepository();
    useCase = new OrderApprovalUseCase(orderRepository);
  });
  it('approvedExistingOrder', () => {
    let initialOrder: Order = new Order(1);
    orderRepository.addOrder(initialOrder);

    let request: OrderApprovalRequest = new OrderApprovalRequest(initialOrder.getId());
    request.approveRequest();

    useCase.run(request);

    const savedOrder: Order = orderRepository.getSavedOrder();
    expect(savedOrder.isApproved()).toBe(true);
  });

  it('rejectedExistingOrder', () => {
    let initialOrder: Order = new Order(1);
    orderRepository.addOrder(initialOrder);

    let request: OrderApprovalRequest = new OrderApprovalRequest(initialOrder.getId());

    useCase.run(request);

    const savedOrder: Order = orderRepository.getSavedOrder();
    expect(savedOrder.isRejected()).toBe(true);
  });

  it('cannotApproveRejectedOrder', () => {
    const initialOrder: Order = new Order(1);
    initialOrder.setStatus(OrderStatus.REJECTED);
    orderRepository.addOrder(initialOrder);

    const request: OrderApprovalRequest = new OrderApprovalRequest(initialOrder.getId());
    request.approveRequest();

    expect(() => useCase.run(request)).toThrow(RejectedOrderCannotBeApprovedException);
    expect(orderRepository.getSavedOrder()).toBe(null);
  });

  it('cannotRejectApprovedOrder', () => {
    const initialOrder: Order = new Order(1);
    initialOrder.setStatus(OrderStatus.APPROVED);
    orderRepository.addOrder(initialOrder);

    const request: OrderApprovalRequest = new OrderApprovalRequest(initialOrder.getId());

    expect(() =>  useCase.run(request)).toThrow(ApprovedOrderCannotBeRejectedException);
    expect(orderRepository.getSavedOrder()).toBe(null);
  });

  it('shippedOrdersCannotBeApproved', () => {
    const initialOrder: Order = new Order(1);
    initialOrder.setStatus(OrderStatus.SHIPPED);
    orderRepository.addOrder(initialOrder);

    const request: OrderApprovalRequest = new OrderApprovalRequest(initialOrder.getId());
    request.approveRequest();

    expect(() => useCase.run(request)).toThrow(ShippedOrdersCannotBeChangedException);
    expect(orderRepository.getSavedOrder()).toBe(null);
  });

  it('shippedOrdersCannotBeRejected', () => {
    let initialOrder: Order = new Order(1);
    initialOrder.setStatus(OrderStatus.SHIPPED);
    orderRepository.addOrder(initialOrder);

    let request: OrderApprovalRequest = new OrderApprovalRequest(initialOrder.getId());

    expect(() => useCase.run(request)).toThrow(ShippedOrdersCannotBeChangedException);
    expect(orderRepository.getSavedOrder()).toBe(null);
  });
});
