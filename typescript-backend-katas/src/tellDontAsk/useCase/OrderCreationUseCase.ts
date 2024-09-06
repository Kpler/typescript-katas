import Order from '../domain/Order';
import OrderItem from '../domain/OrderItem';
import Product from '../domain/Product';
import OrderRepository from '../repository/OrderRepository';
import { ProductCatalog } from '../repository/ProductCatalog';
import SellItemsRequest from './SellItemsRequest';
import UnknownProductException from './UnknownProductException';

class OrderCreationUseCase {
  private readonly orderRepository: OrderRepository;
  private readonly productCatalog: ProductCatalog;

  public constructor(orderRepository: OrderRepository, productCatalog: ProductCatalog) {
    this.orderRepository = orderRepository;
    this.productCatalog = productCatalog;
  }

  public run(request: SellItemsRequest): void {
    const items: OrderItem[] = [];
    const order: Order = new Order('EUR', items);

    for (const itemRequest of request.getRequests()) {
       const product: Product = this.productCatalog.getByName(itemRequest.getProductName());

      if (product === undefined) {
        throw new UnknownProductException();
      }
      else {
        const orderItem: OrderItem = new OrderItem(product, itemRequest);
        order.setTax(order.getTax() + orderItem.getTax());
        items.push(orderItem);
      }
    }

    items.forEach(item => {
      order.getItems().push(item);
    });

    const total = items.reduce((sum, item) => sum + item.getTaxedAmount(), 0)
    order.setTotal(total);

    this.orderRepository.save(order);
  }
}

export default OrderCreationUseCase;
