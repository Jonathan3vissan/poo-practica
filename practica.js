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






class Rectangulo {
    ancho = 0;
    alto = 0;

    setAncho(num) {
        this.ancho = num
    }
    setAlto(num2) {
        this.alto = num2
    }

    calcularArea() {
        return this.ancho * this.alto
    }

    calcularPerimetro() {
        return (2 * (this.ancho * this.alto))
    }
}

const rectangulo = new Rectangulo();
let numeroo = 4;
let numerooll = 5;
rectangulo.setAncho(numeroo);
rectangulo.setAlto(numerooll);
console.log("resultado de perimetro");
console.log(rectangulo.calcularPerimetro());
console.log("resultado de area");
console.log(rectangulo.calcularArea());

