//tuplas en typescript no pueden cambiar de orden
//las tuplas solo se ponen fuertes cuando se inicializan
let tuplas: [string, number, boolean] ;
tuplas =["hola mundo", 8888, true,];
tuplas.push("holamundo");
console.log(tuplas)

