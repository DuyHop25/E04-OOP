// Khai báo lớp Product
export class Product {
    // Khai báo thuộc tính 
    name: string;
    price: number;
    quantity: number;
    static totalProducts: number = 0;

    /**
     * Khởi tạo đối tượng 
     * @param name      tên sản phẩm
     * @param price     giá sản phẩm
     * @param quantity  số lượng sản phẩm
     */
    constructor(name: string, price: number, quantity: number) {
        this.name = name;
        this.price = price;
        this.quantity = quantity;
        Product.totalProducts++;
    }

    /**
     * Phương thức tính tổng số sản phẩm được tạo ra.
     * @returns tổng sản phẩm 
     */
    getTotalValue() {
        return this.price * this.quantity;
    }
    /**
     * Phương thức tĩnh lấy tổng số sản phẩm
     * @returns tổng sản phẩm
     */
    static getTotalProducts() {
        return Product.totalProducts;
    }
}

