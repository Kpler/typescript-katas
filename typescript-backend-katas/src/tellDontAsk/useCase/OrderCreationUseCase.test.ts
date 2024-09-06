import InMemoryProductCatalog from '../doubles/InMemoryProductCatalog';
import TestOrderRepository from '../doubles/TestOrderRepository';
import Category from "../domain/Category";
import {ProductCatalog} from "../repository/ProductCatalog";
import OrderCreationUseCase from "./OrderCreationUseCase";
import SellItemRequest from "./SellItemRequest";
import SellItemsRequest from "./SellItemsRequest";
import Order from "../domain/Order";
import {OrderStatus} from "../domain/OrderStatus";
import UnknownProductException from "./UnknownProductException";
import Product from "../domain/Product";

describe('OrderApprovalUseCase', () => {
  const orderRepository: TestOrderRepository = new TestOrderRepository();
  let food: Category = new Category('food', 10);

  const saladProduct = new Product('salad', 3.56, food);
  const tomatoProduct = new Product('tomato', 4.65, food);

  const productCatalog: ProductCatalog = new InMemoryProductCatalog([ saladProduct, tomatoProduct]);
  const useCase: OrderCreationUseCase = new OrderCreationUseCase(orderRepository, productCatalog);

  it('sellMultipleItems', () => {
      let saladRequest: SellItemRequest = new SellItemRequest('salad', 2);

      let tomatoRequest: SellItemRequest = new SellItemRequest('tomato', 3);

      let request: SellItemsRequest = new SellItemsRequest(
          [saladRequest, tomatoRequest]
      );

      useCase.run(request);

      const insertedOrder: Order = orderRepository.getSavedOrder();
      expect(insertedOrder.getStatus()).toBe(OrderStatus.CREATED);
      expect(insertedOrder.getTotal()).toBe(23.20);
      expect(insertedOrder.getTax()).toBe((2.13));
      expect(insertedOrder.getCurrency()).toBe(('EUR'));
      expect(insertedOrder.getItems().length).toBe(2);
      expect(insertedOrder.getItems()[0].getProduct().getName()).toBe('salad');
      expect(insertedOrder.getItems()[0].getProduct().getPrice()).toBe(3.56);
      expect(insertedOrder.getItems()[0].getQuantity()).toBe(2);
      expect(insertedOrder.getItems()[0].getTaxedAmount()).toBe(7.84);
      expect(insertedOrder.getItems()[0].getTax()).toBe(0.72);
      expect(insertedOrder.getItems()[1].getProduct().getName()).toBe('tomato');
      expect(insertedOrder.getItems()[1].getProduct().getPrice()).toBe(4.65);
      expect(insertedOrder.getItems()[1].getQuantity()).toBe(3);
      expect(insertedOrder.getItems()[1].getTaxedAmount()).toBe(15.36);
      expect(insertedOrder.getItems()[1].getTax()).toBe(1.41);
  });

  it('unknownProduct', () => {
      let request: SellItemsRequest = new SellItemsRequest([]);
      let unknownProductRequest: SellItemRequest = new SellItemRequest('unknown product', 0);
      request.getRequests().push(unknownProductRequest);

      expect(() => useCase.run(request)).toThrow(UnknownProductException);
  });
});
