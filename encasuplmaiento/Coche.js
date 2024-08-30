class Coche {
    #kilometro = 0;
    mover(km) {
        if (km > 0) {
            this.#kilometro += km
        }
    }

    consultarKilometros() {
        return this.#kilometro
    }
}

const fiat128 = new Coche();
let avanze = 19;

fiat128.mover(avanze)

console.log(fiat128.consultarKilometros());

//console.log(fiat128.#kilometros);

