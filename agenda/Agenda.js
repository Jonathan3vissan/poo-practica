class Agenda {
    #contacto = [
        {
            nombre: "def nombre",
            telefono: 0,
        }
    ]

    agregarContacto(nombre, telefono) {
        let nuevoContacto = {
            nombre: nombre,
            telefono: telefono
        };
        let contactoEncontrado = false;
        let p = 0;
        for (let i = 0; i < this.#contacto.length; i++) {
            if (this.#contacto[i].nombre === nombre) {
                contactoEncontrado = true;
                p = i;
            }
        }
        if (contactoEncontrado) {
            this.#contacto[p].telefono = telefono
            console.log("contacto existente,actuaizaciond e numeor de telefono exitoso");

        } else {
            if (this.#contacto[0].nombre === "def nombre") {
                this.#contacto.shift();
                console.log("elimino el def de fabrica");

            }
            this.#contacto.push(nuevoContacto)
            console.log("contacto agredo exitosamente");
        }
    }


    eliminarContacto(nombre) {
        let contactoEncontrado = false;
        let p = 0;
        for (let i = 0; i < this.#contacto.length; i++) {
            if (this.#contacto[i].nombre === nombre) {
                contactoEncontrado = true;
                p = i;
            }
        }
        if (contactoEncontrado) {
            this.#contacto.splice(p, 1);
            console.log("contacto eliminado exitosamente");
        } else {
            console.log("contacto no encontrado , no se puede llevar a cabo la accion desead");
        }
    }

    buscarContacto(nombre) {
        const contactoEncontrado = this.#contacto.find(contacto => contacto.nombre === nombre);
        return contactoEncontrado
    }


    listaDeContactos() {
        return this.#contacto
    }


}

const agendacontactos = new Agenda();
let nombre = "estaban ";
let numeroTelefno = 1154891235;

agendacontactos.agregarContacto(nombre, numeroTelefno)


console.table(agendacontactos.listaDeContactos())
console.table(agendacontactos.buscarContacto(nombre))

agendacontactos.eliminarContacto(nombre)

console.table(agendacontactos.listaDeContactos())
