class Empleado {
    #salario = 1000;
    aumentoSalario(monto) {
        this.#salario += monto


    }
    consultaSAlario() {
        return this.#salario - this.#calcularImpuesto();
    }
    #calcularImpuesto() {
        let montoImpuesto = 0;
        montoImpuesto = this.#salario * 0.2
        return montoImpuesto
    }
}


const empleadoPerez = new Empleado();
let aumento = 2500;
empleadoPerez.aumentoSalario(aumento);

console.log(empleadoPerez.consultaSAlario());


