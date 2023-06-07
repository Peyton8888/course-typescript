let cass :unknown = "hola mundo";
// console.log((cass as number).length) => da error por que no existe .length en un numero
// console.log((cass as number).toFixed()) => da error por que el valor es un string
console.log((cass as string).toLowerCase())

//casting con <>

let casting:unknown = "hola mis amigos";
console.log((<string>casting).length);

//convertir valores a desconocidos y numeros

let desconocido = "HeLlO WorD";
// console.log(((desconocido as unknown)as number).length) => da error La propiedad 'length' no existe en el tipo 'number
console.log(((desconocido as unknown)as string).toLowerCase());

