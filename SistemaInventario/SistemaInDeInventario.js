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
            console.log("producto existente,cantidad en deposito agregada");
        } else {
            this.#productos.push(productoNuevo)
            console.log("Producto nuevo, agregado al sistema");
        }
    }

    venderProducto(nombreVenta, cantidadVenta) {
        let productoEncontrado = false;
        let p = 0;
        for (let i = 0; i < this.#productos.length; i++) {
            if (this.#productos[i].nombre === nombreVenta) {
                productoEncontrado = true;
                p = i;
            }
        }
        if (productoEncontrado) {
            if (this.#productos[p].cantidad >= cantidadVenta) {
                this.#productos[p].cantidad -= cantidadVenta;
                console.log("venta exitosa ");
            } else {
                console.log("no se puede realiza la venta por falta de unidades, intente con una cantidad menor a:", cantidadVenta);

            }
        } else {
            console.log("prodcuto no encotrado, revise el nombre del producto por facor ");
        }
    }

    consultaInventario() {

        return this.#productos
    }
}






const almacenDonPedro = new SitemaInventario();
let DonSatur = {
    nombre: "Don Satur",
    cantindad: 250,
}
let nombreVentass = "Don Satur";
let venderCantidad = 199;


almacenDonPedro.agregarProductos(DonSatur.nombre, DonSatur.cantindad)

console.table(almacenDonPedro.consultaInventario());

almacenDonPedro.venderProducto(nombreVentass, venderCantidad)

console.table(almacenDonPedro.consultaInventario())