import { ShoppingCart } from './ShoppingCart';
import { Orders } from './Orders';

export type User = {
    name: string;
    surname: string;
    email: string;
    password: number;
    id: number;
    shoppingcart: ShoppingCart;
    orders: Orders[];
    date_joined: string;
    birth_date: number;
};
