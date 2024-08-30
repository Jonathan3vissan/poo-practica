class SitemaInventario {
    #productos = [
        {
            nombre: "Pepita",
            cantidad: 500,
        }
    ];


    agregarProductos(nuevoNombre, agregarCantidad) {
      let productoEncontrado=false;
        producto1 = {
            nombre: nuevoNombre,
            cantidad: agregarCantidad
        }
        console.log(producto1);
        console.log("obehot leido bien");
        console.log(this.#productos.length);
        console.log(this.#productos);
        console.log(typeof this.#productos);
        try {

            if (this.#productos.length === 0) {
                this.#productos.push(producto1)
            } else {
                for (let i = 0; i <= this.#productos.length; i++) {

                    if (this.#productos[i].nombre === nuevoNombre) {
                        this.#productos[i].cantidad += agregarCantidad;
                        console.log("aca arriba agrego stock-----29");

                    } else {
                        this.#productos.push(producto1)
                        console.log("arriba agrego el nuevo producto-------------33");
                        console.log(this.#productos[i]);

                    }
                }
            }
        } catch (error) {
            console.error(error)
        }
    }






    venderProducto(nombreVenta, cantidadVenta) {
        for (let i = 0; i < this.#productos.length; i++) {
            if (this.#productos[i].nombre === nombreVenta) {
                if (this.#productos[i].cantidad >= cantidadVenta) {
                    this.#productos[i].cantidad -= cantidadVenta;
                } else {
                    console.log("cantidad insuficiente ,pruebe conuna cantidad mas pequeña");
                }
            } else {
                console.log("Producto no disponible   ---57");

            }
        }

    }



    consultaInventario() {
        try {
            for (let i = 0; i < this.#productos.length; i++) {
                console.log(this.#productos.length);
                console.log(`nombre porducto:${this.#productos[i].nombre} cantidad en stock: ${this.#productos[i].cantidad}`);
                console.log("debajo del mostra procudtoc");

            }

        } catch (error) {
            console.error(error)
        }
    }

}

const almacenDonPedro = new SitemaInventario();
let producto1 = "Don Satur"
let cantidaAgregada = 250;
let vendidos = 12;

almacenDonPedro.agregarProductos(producto1, cantidaAgregada)

console.log("abajo tiene que esta le primero valor de inventario");

console.log(almacenDonPedro.consultaInventario());


almacenDonPedro.venderProducto(producto1, vendidos)


console.log("-----------92 despues de la venta ---------");
console.log(almacenDonPedro.consultaInventario());

