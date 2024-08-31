class SitemaInventario {
    #productos = [
        {
            nombre: "Pepita",
            cantidad: 500,
        }
    ];

    agregarProductos(nuevoNombre, agregarCantidad) {
        let productoEncontrado = false;
        let p = 0;
        let productoNuevo = {
            nombre: nuevoNombre,
            cantidad: agregarCantidad
        }
        for (let i = 0; i < this.#productos.length; i++) {
            if (this.#productos[i].nombre.includes === productoNuevo.nombre) {
                productoEncontrado = true;
                p = i;
            }
        }
        if (productoEncontrado) {
            this.#productos[p].cantidad += agregarCantidad;
            console.log("producto existente, se aumenteo el stock");
        } else {
            this.#productos.push(productoNuevo)
            console.log("Producto nuevo , agrega al alamcen");
        }
    }






    venderProducto(nombreVenta, cantidadVenta) {

        const productoParaVender = this.#productos.find(productos => this.#productos.nombre === nombreVenta)

        console.log("econtre el producto",productoParaVender);
        
    }




    consultaInventario() {
        return console.table(this.#productos);
    }


}






const almacenDonPedro = new SitemaInventario();
let DonSatur = {
    nombre: "Don Satur",
    cantindad: 250,
}


almacenDonPedro.agregarProductos(DonSatur.nombre, DonSatur.cantindad)

console.log(almacenDonPedro.consultaInventario());