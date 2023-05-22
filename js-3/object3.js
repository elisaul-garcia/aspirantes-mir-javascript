let receta = {
    nombre: "Sandwich",
    ingredientes: []
  };
  
  receta.ingredientes.push({nombre: "Pan", cantidad: 2});
  
  receta.ingredientes.push({nombre: "Queso", cantidad: 1});
  
  console.log(receta.ingredientes[0].nombre);
  
  let totalCantidad = 0;
  for (let i = 0; i < receta.ingredientes.length; i++) {
    totalCantidad += receta.ingredientes[i].cantidad;
  }
  
  console.log("La receta requiere " + totalCantidad + " unidades de ingredientes.");
  