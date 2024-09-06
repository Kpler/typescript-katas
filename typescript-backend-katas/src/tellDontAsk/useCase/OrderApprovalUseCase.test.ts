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
    let initialOrder: Order = new Order();
    initialOrder.setId(1);
    orderRepository.addOrder(initialOrder);

    let request: OrderApprovalRequest = new OrderApprovalRequest();
    request.setOrderId(1);
    request.approveRequest();

    useCase.run(request);

    const savedOrder: Order = orderRepository.getSavedOrder();
    expect(savedOrder.getStatus()).toBe(OrderStatus.APPROVED);
  });

  it('rejectedExistingOrder', () => {
    let initialOrder: Order = new Order();
    initialOrder.setStatus(OrderStatus.CREATED);
    initialOrder.setId(1);
    orderRepository.addOrder(initialOrder);

    let request: OrderApprovalRequest = new OrderApprovalRequest();
    request.setOrderId(1);

    useCase.run(request);

    const savedOrder: Order = orderRepository.getSavedOrder();
    expect(savedOrder.getStatus()).toBe(OrderStatus.REJECTED);
  });

  it('cannotApproveRejectedOrder', () => {
    const initialOrder: Order = new Order();
    initialOrder.setStatus(OrderStatus.REJECTED);
    initialOrder.setId(1);
    orderRepository.addOrder(initialOrder);

    const request: OrderApprovalRequest = new OrderApprovalRequest();
    request.setOrderId(1);
    request.approveRequest();

    expect(() => useCase.run(request)).toThrow(RejectedOrderCannotBeApprovedException);
    expect(orderRepository.getSavedOrder()).toBe(null);
  });

  it('cannotRejectApprovedOrder', () => {
    const initialOrder: Order = new Order();
    initialOrder.setStatus(OrderStatus.APPROVED);
    initialOrder.setId(1);
    orderRepository.addOrder(initialOrder);

    const request: OrderApprovalRequest = new OrderApprovalRequest();
    request.setOrderId(1);

    expect(() =>  useCase.run(request)).toThrow(ApprovedOrderCannotBeRejectedException);
    expect(orderRepository.getSavedOrder()).toBe(null);
  });

  it('shippedOrdersCannotBeApproved', () => {
    const initialOrder: Order = new Order();
    initialOrder.setStatus(OrderStatus.SHIPPED);
    initialOrder.setId(1);
    orderRepository.addOrder(initialOrder);

    const request: OrderApprovalRequest = new OrderApprovalRequest();
    request.setOrderId(1);
    request.approveRequest();

    expect(() => useCase.run(request)).toThrow(ShippedOrdersCannotBeChangedException);
    expect(orderRepository.getSavedOrder()).toBe(null);
  });

  it('shippedOrdersCannotBeRejected', () => {
    let initialOrder: Order = new Order();
    initialOrder.setStatus(OrderStatus.SHIPPED);
    initialOrder.setId(1);
    orderRepository.addOrder(initialOrder);

    let request: OrderApprovalRequest = new OrderApprovalRequest();
    request.setOrderId(1);

    expect(() => useCase.run(request)).toThrow(ShippedOrdersCannotBeChangedException);
    expect(orderRepository.getSavedOrder()).toBe(null);
  });
});
