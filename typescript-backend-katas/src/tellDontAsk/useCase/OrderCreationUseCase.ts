import Order from '../domain/Order';
import OrderItem from '../domain/OrderItem';
import { OrderStatus } from '../domain/OrderStatus';
import Product from '../domain/Product';
import OrderRepository from '../repository/OrderRepository';
import { ProductCatalog } from '../repository/ProductCatalog';
import SellRequest from './SellRequest';
import UnknownProductException from './UnknownProductException';

class OrderCreationUseCase {
  private readonly orderRepository: OrderRepository;
  private readonly productCatalog: ProductCatalog;

  public constructor(orderRepository: OrderRepository, productCatalog: ProductCatalog) {
    this.orderRepository = orderRepository;
    this.productCatalog = productCatalog;
  }

  public run(request: SellRequest): void {
    const order: Order = new Order();
    order.setStatus(OrderStatus.CREATED);
    order.setItems([]);
    order.setCurrency('EUR');
    order.setTotal(0);
    order.setTax(0);

    for (const itemRequest of request.getRequests()) {
      const product: Product = this.productCatalog.getByName(itemRequest.getProductName());

      if (product === undefined) {
        throw new UnknownProductException();
      }

      const orderItem = new OrderItem(itemRequest, product);

      order.getItems().push(orderItem);

      order.setTotal(order.getTotal() + orderItem.getTaxedAmount());
      order.setTax(order.getTax() + orderItem.getTax());

    }

    this.orderRepository.save(order);
  }
}

export default OrderCreationUseCase;
