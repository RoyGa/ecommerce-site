import { ProductItem } from './ProductItem';

export type Category = {
    title: string;
    id: number;
    items: ProductItem[];
};