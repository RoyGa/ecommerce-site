import { ProductItem } from './ProductItem';

export type Order = {
    id: number;
    item: ProductItem;
    order_time: String;
    shipping_time: String;
    status: String;
    receive_confirmation: boolean;
};