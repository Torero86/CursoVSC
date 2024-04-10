import fs1 from 'fs'

const fs=fs1.promises

export default class ProductManager {
  constructor() {
    this.products = [];
    this.PATH = './data/products.JSON'
    this.id = 0;
  }

  jsonSave = async (arrayAGuardar) => {
    return await fs.writeFile(this.PATH, JSON.stringify(arrayAGuardar), "utf8"  )
  }

  getProducts = async () => {
    const data = await fs.readFile(this.PATH, "utf8");
    try {
      const products = JSON.parse(data);
      return products;
    } catch (error) {
      return [];
    }
  };

  addProduct = async (title, description, price, thumbnail, code, stock) => {
    try {
      let products = await this.getProducts();
      let fileExists = await fs.stat(this.PATH);
      if (!fileExists) {
        await fs.writeFile(this.PATH, JSON.stringify([]));
      }
    if (!title || !description || !price || !thumbnail || !code || !stock) {
      return await console.log("faltan datos!");
    } 
    
    if (products.some(product => product.code === code)) {
      return await console.log("Este producto ya existe");
    }
      let iDGenerator = products.at(-1).id;
      this.id = iDGenerator+1;
      let nuevoProducto = { title, description, price, thumbnail, code, stock, id:this.id };

      const arrayModificado = [...products, nuevoProducto];
      this.jsonSave(arrayModificado);
      console.log("Se agrego el producto: ", nuevoProducto);
    }
      catch (error) {
        console.log(error);
      }
      
    
  };

  async getProductsById(id) {
    let products = await this.getProducts();
    if (products.some((product) => product.id === id)) {
      const productFind = products.find((product) => product.id === id);
      return console.log(`Aqui está el producto buscado con el id ${id}: `, productFind);
    } else {
      console.log(`El id ${id} no es válido`);
    }
  };


  async deleteProduct(id) {
    let arraydeproductos = JSON.parse(await fs.readFile(this.PATH, 'utf-8'));
    if (arraydeproductos.find((producto) => producto.id === id)) {
      let nuevoArray = arraydeproductos.filter((producto) => producto.id != id);
      this.products = nuevoArray;
      console.log(`El producto con id ${id} ha sido eliminado`);
      this.jsonSave(nuevoArray);
    }
  }
  updateProduct = async ({id, ...producto }) => {
    await this.deleteProduct(id);
    let arrayProductos = await this.getProducts() ;
    let arrayModificado = [{id, ...producto}, ...arrayProductos];
    this.jsonSave(arrayModificado);
  };
}
