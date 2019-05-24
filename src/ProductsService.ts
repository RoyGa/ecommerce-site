import { ProductItem } from './Models/ProductItem';
import { ShoppingCart} from './Models/ShoppingCart';

export class ProductsService {

  private id = 0;
  private products: ProductItem[] = [];

  constructor() {
    this.createProduct('Item 1', 99, 'Nike');
    this.createProduct('Item 2', 25, 'Pull&Bear');
    this.createProduct('Item 3', 59, 'Zara');
    this.createProduct('Item 4', 70, 'Nike');
    this.createProduct('Item 5', 99, 'Nike');
    this.createProduct('Item 6', 25, 'Pull&Bear');
    this.createProduct('Item 7', 59, 'Zara');
    this.createProduct('Item 8', 70, 'Nike');
  }

  createProduct(title: string, price: number, brand: string): void {
    const product: ProductItem = {
      title,
      price,
      id: this.id++,
      brand
    };

    this.products = [...this.products, product];
  }

  getProducts(): ProductItem[] {
    return this.products;
  }

  getProductById(productId: number): ProductItem {
      let productIndex = this.products.findIndex(product => {
          return product.id == productId;
      });
      return this.products[productIndex];
  }

  getShoppingCart(): ShoppingCart {
    const sct: ShoppingCart = {
      title: "temp",
      id: 1,
      items: this.getProducts()
    };
    return sct;
  } 


