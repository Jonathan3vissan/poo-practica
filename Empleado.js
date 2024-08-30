class Persona {
    nombre = "papillon";
    edad = 20;
    saludar() {
        return "hola", this.nombre
    }

}


const empleado = new Persona();

console.log(empleado);
empleado.puesto = "desarrollador juniors"
empleado.salario = 2500;
console.log(empleado);

empleado.mostrarInforamcion = function () {
    return (
        `holas soy  ${this.nombre} tengo ${this.edad} años, trabajo de ${this.puesto} mi salario es de ${this.salario}`)
}
console.log("aca abajo tiene que mostrar los detalles del empelado");

console.log(empleado.mostrarInforamcion());


