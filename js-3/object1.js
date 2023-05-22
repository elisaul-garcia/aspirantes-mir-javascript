const pedro = {
    nombre:"Pedro Perez",
    edad:30,
    activo: true,
    hobbies:["programar","squash","piano"]
}

console.log(pedro.edad);

pedro.estatura=1.8

delete pedro.activo

for(const property in pedro) {
    console.log(property + ": " + pedro [property]);
  }
  
  pedro.saluda = function() {
    return "Hola, me llamo " + this.nombre;
  }

  console.log(pedro.saluda());






