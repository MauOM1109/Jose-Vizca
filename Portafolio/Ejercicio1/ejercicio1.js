let maquinaPrendida = true;
let cantidadVoltios = 0;

while (maquinaPrendida) {
    if(cantidadVoltios <= 100){ 
    alert("Cantidad de volteos" + cantidadVoltios)
        cantidadVoltios = cantidadVoltios + maquinaPrendida ;
    }
    cantidadVoltios = cantidadVoltios + 1;
}

alert(cantidadVoltios);
