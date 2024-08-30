class SitemaInventario {
    #productos = [];


    agregarProductos(nuevoNombre, agregarCantindad) {
        for (let i = 0; i < this.#productos.length; i++) {
            if (!this.#productos[i].nombre.includes(nuevoNombre)) {
                this.#productos[i].nombre = nuevoNombre;
                this.#productos[i].cantidad = agregarCantindad;
            } else {
                this.#productos[i].cantidad += agregarCantindad;
            }
        }
    }

    venderProducto(nombreVEnta, cantidadVenta) {

        if (this.#productos) {
    
}




    }

    consultaInventario() {
        for (let i = 0; i < this.#productos.length; i++) {
            console.log(`nombre porducto:${this.#productos[i].nombre} cantidad en stock: ${this.#productos[i], cantidad}`);
        }
    }
}