class CuentaBancaria {
    saldo = 120;
    depositar(deposito) {
        this.saldo += deposito;
    }

    retirar(retiro) {
        if (retiro > this.saldo) {
            console.log("no tiene saldo suficiente par el retiro deseado");
        } else {
            this.saldo -= retiro;
        }
    }

    MostrarSaldo() {
        return this.saldo
    }

}


const cuentaBancaria = new CuentaBancaria();

let retiro = 200;
let depostios = 100;

console.log(cuentaBancaria.MostrarSaldo());

cuentaBancaria.retirar(retiro);
console.log("salod disponible", cuentaBancaria.MostrarSaldo());

cuentaBancaria.depositar(depostios);
console.log("salDO disponible", cuentaBancaria.MostrarSaldo());

console.log("abajo retira con saldo suifiente");
cuentaBancaria.retirar(retiro)


