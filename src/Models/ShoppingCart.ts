import { ProductItem } from './ProductItem';

export type ShoppingCart = {
    title: string;
    id: number;
    items: ProductItem[];
};