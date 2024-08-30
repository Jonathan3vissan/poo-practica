class Libro {
    #titulo = "def titulo";
    #autor = "def autor";

    setDetalles(titulo, autor) {
        this.#titulo = titulo;
        this.#autor = autor;
    }

    getDetalles() {
        return ("titulo del libro: " + this.#titulo + " " + "autor: " + this.#autor)
    }
}

const libroPenaDeMuerte = new Libro();
let nombre = "Pena de Muerte";
let autor = "Fernando Savater";


libroPenaDeMuerte.setDetalles(nombre, autor)

console.log(libroPenaDeMuerte.getDetalles());



