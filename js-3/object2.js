
let persona = {
    nombre: "Maria",
    edad: 25,
    ciudad: "Medellin",
    profesion: "Ingeniera"
  };
  
  
  console.log(persona);
  
  
  function presentacion(obj) {
    return "Hola, mi nombre es " + obj.nombre + ", tengo " + obj.edad + " años y vivo en " + obj.ciudad + ".";
  }
  
    let mensaje = presentacion(persona);
  
 
  console.log(mensaje);
  
  
  persona.hobbies = ["leer", "correr", "bailar"];
  
  
  console.log(persona.hobbies);
  
  
  for (let i = 0; i < persona.hobbies.length; i++) {
    console.log(persona.hobbies[i]);
  }