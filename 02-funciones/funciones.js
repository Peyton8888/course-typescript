//funciones en typescript
function suma(num, num2) {
    return num + num2;
}
console.log(suma(80, 20));
//siempre se debe declarar la variable en el parametro de la funcion
function uperstring(str) {
    return str.toUpperCase();
}
console.log(uperstring("hola MUNdo"));
function tresvalues(nombre, id, estado) {
    return nombre.charAt, id.toFixed(2), estado != estado;
}
console.log(tresvalues("santiago", 888888, true));
//no retonos en funciones
var marcar = function (nombre, apellido, estado) {
    console.log("hola soy ".concat(nombre, " mi apellido es ").concat(apellido, " estoy en estado ").concat(estado));
};
marcar("santiago", "matias", false);
//retorno de valores
var sumados = function (num_1, num_2) {
    return num_1 + num_2;
};
console.log(suma(56, 43));
