// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';

const OrderStatus = {
  "NEW": "NEW",
  "COOKING": "COOKING",
  "READY": "READY"
};

const { Cart, User, Basket, BasketDish, Dish, Order, Restaurant, OrderDish, Donut, Favorites } = initSchema(schema);

export {
  Cart,
  User,
  Basket,
  BasketDish,
  Dish,
  Order,
  Restaurant,
  OrderDish,
  Donut,
  Favorites,
  OrderStatus
};