class Persona {
    nombre = "ernesto";
    edad = 23;
    Saludar() {
        return "hola soy " + this.nombre + "y tengo " + this.edad + "años"
    }
}
const persona = new Persona();


console.log(persona.Saludar());
