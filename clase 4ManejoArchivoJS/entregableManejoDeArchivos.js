const fs = require('fs');

export default class ProductManager {
    #products;
    #filePath;

    constructor(filePath) {
        this.#products = [];
        this.#filePath = filePath;
        this.loadProducts();
    }

    loadProducts() {
        try {
            const data = fs.readFileSync(this.#filePath, 'utf8');
            this.#products = JSON.parse(data);
        } catch (error) {
            console.error('Error al cargar productos:', error.message);
        }
    }

    saveProducts() {
        try {
            fs.writeFileSync(this.#filePath, JSON.stringify(this.#products, null, 2));
        } catch (error) {
            console.error('Error al guardar productos:', error.message);
        }
    }

    addProduct(title, description, price, thumbnail, code, stock) {
        const product = {
            id: this.#getNewId(),
            title,
            description,
            price,
            thumbnail,
            code,
            stock,
        };

        const productoExistente = this.#products.find(p => p.code === code);
        if (productoExistente) {
            throw new Error("El producto ya existe");
        }

        this.#products.push(product);
        this.saveProducts();
    }

    getProducts() {
        return this.#products;
    }

    getProductById(id) {
        return this.#products.find(product => product.id === id);
    }

    updateProduct(id, newData) {
        const index = this.#products.findIndex(product => product.id === id);
        if (index !== -1) {
            this.#products[index] = { ...this.#products[index], ...newData, id }; 
            this.saveProducts();
            return true;
        }
        return false;
    }

    deleteProduct(id) {
        const index = this.#products.findIndex(product => product.id === id);
        if (index !== -1) {
            this.#products.splice(index, 1);
            this.saveProducts();
            return true;
        }
        return false;
    }

    #getNewId() {
        if (this.#products.length === 0) {
            return 1;
        }
        return this.#products[this.#products.length - 1].id + 1;
    }
}



const productManager = new ProductManager('productos.json');

productManager.addProduct("tv 1", "Descripción del tv 1", 100000, "tv.jpg", "1020", 20);
productManager.addProduct("tv 2", "Descripción del tv 2", 205045, "tv.jpg", "X2010", 28);
productManager.addProduct("tv 3", "Descripción del tv 3", 105045, "tv.jpg", "87010", 88);
productManager.addProduct("tv 4", "Descripción del tv 4", 58045, "tv.jpg", "151010", 810);

console.log("Todos los productos:", productManager.getProducts());
console.log("Producto con ID 3:", productManager.getProductById(3));

productManager.updateProduct(3, { price: 120000, stock: 100 });
console.log("Producto modificado:", productManager.getProductById(3));

productManager.deleteProduct(2);
console.log("Productos después de eliminar el producto con ID 2:", productManager.getProducts());
