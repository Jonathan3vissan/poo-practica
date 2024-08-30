class CuentaBancaria {
    #saldo = 1200;
    depositar(monto) {
        if (monto>0) {
            this.#saldo += monto;
        }else{
            console.log("cantindad invalida");
        }
    }
    retirar(monto) {
        if (monto > 0 && monto <= this.#saldo) {
            this.#saldo -= monto
        } else {
            console.log("saldo insuficiente o monto invalido");
        }
    }
    consultaSaldo() {
        return this.#saldo
    }
}

const cuentaLopez = new CuentaBancaria();
let plata = 30000;
let sustraccion = 3599;
cuentaLopez.depositar(plata)
cuentaLopez.retirar(sustraccion)


console.log(cuentaLopez.consultaSaldo());
