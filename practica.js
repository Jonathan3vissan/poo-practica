class Persona {
    nombre = "ernesto";
    edad = 23;
    Saludar() {
        return "hola soy " + this.nombre + " " + "y tengo " + this.edad + "" + " años"
    }
}
const persona = new Persona();


console.log(persona.Saludar());



class Circulo {
    radio = 0;


    calcularCircunferencia() {
        let circunferencia = 2 * Math.PI * this.radio
        return circunferencia
    }


    setRadio(valor) {
        this.radio = valor
    }


}


const circulo = new Circulo();
let numero = 10;

circulo.setRadio(numero);

console.log(circulo.calcularCircunferencia());

