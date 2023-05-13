// escribe la función join acá

function join(array) {
    let result = "";
  
    for (let i = 0; i < array.length; i++) {
      result += array[i];
  
      if (i !== array.length - 1) {
        result += " ";
      }
    }
  
    return result;
}

console.log(join(["Hola", "Mundo"])) // "Hola Mundo"
console.log(join(["Make", "It", "Real"])) // "Make It Real"
console.log(join([])) // ""


