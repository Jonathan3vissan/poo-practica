class Juego {
    #jugadores = [
        {
            nombre: "zampeon",
            puntos: 40,

        }
    ]

    agregarJugador(nombre) {
        let nuevoJugador = {
            nombre: nombre,
            puntos: 0,
        }
        if (this.#jugadores[0].nombre === "def nombre") {
            this.#jugadores.splice(0, 1)
        }
        this.#jugadores.push(nuevoJugador)
        console.log("jugador creado exitosamente");
        console.log(this.#jugadores.length);
    }

    sumarPuntos(nombre, puntos) {
        let jugadorEcnotrado = false;
        let p = 0;
        for (let i = 0; i < this.#jugadores.length; i++) {
            if (this.#jugadores[i].nombre === nombre)
                jugadorEcnotrado = true;
            p = i;
        }
        if (jugadorEcnotrado) {
            this.#jugadores[p].puntos += puntos;
            console.log("grandioso aumntados tus puntos!!!");

        } else {
            console.log("jugador no exites, por favro intente de nuevo");
        }
    }

    obtenerPuntaje(nombre) {
        const obtenerPuntaje = this.#jugadores.find(jugadores => jugadores.nombre === nombre)
        if (obtenerPuntaje === undefined) {
            console.log("jugador no encontrado");
        }
        return (obtenerPuntaje)

    }

    listaPuntajes() {
        let ordenar = [...this.#jugadores];
        ordenar.sort((a, b) => b.puntos - a.puntos)
        return ordenar
    }





} 
const jugador1 = new Juego();
let alias = "gordillo"
let puntuacion = 25999;

jugador1.agregarJugador(alias)
jugador1.sumarPuntos(alias, puntuacion)
console.table(jugador1.obtenerPuntaje(alias));
console.table(jugador1.listaPuntajes());
