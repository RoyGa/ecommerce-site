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

  /*
  updateProduct(updateProduct: ProductItem): void {
    this.products = this.products.map((product: ProductItem) =>  product.id === updateTodo.id ? updateTodo : todo);

    if(updateTodo.complete) updateTodo.temp = 'check_box';
    else updateTodo.temp = 'check_box_outline_blank';
  }*/

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

  /*
  deleteTodo(todoToDelete: TodoItem): void {
    this.todos = this.todos.filter((todo: TodoItem) => todo.id !== todoToDelete.id);
  }

  promoteTodo(todoItem: TodoItem): void {
    const indexOfTodo = this.todos.findIndex((todo) => todo.id === todoItem.id);
    if (indexOfTodo === 0 ) {
      return;
    }
    this.todos = [
      ...this.todos.slice(0, indexOfTodo - 1),
      this.todos[indexOfTodo], this.todos[indexOfTodo - 1],
      ...this.todos.slice(indexOfTodo + 1)
    ];
  }

  demoteTodo(todoItem: TodoItem): void {
    const indexOfTodo = this.todos.findIndex((todo) => todo.id === todoItem.id);
    if (indexOfTodo >= this.todos.length - 1) {
      return;
    }
    this.promoteTodo(this.todos[indexOfTodo + 1]);
  }*/
}
