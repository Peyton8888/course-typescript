// devuelve un valor numerico
function fecha() {
    return new Date().getHours();
}
console.log(fecha());
// devuelve un valor string
function str() {
    return "hola mundo";
}
console.log(str());
//no devuelve nada
function void1() {
    console.log("no devuelvo nada");
}
void1();
//incluyendo paremetros
function suma(num1, num2) {
    return num1 + num2;
}
console.log(suma(33, 48));
//sumando 3 numeros y uno opcional -> ?
function suma2(num1, num2, num3) {
    return num1 + num2 + (num3 || 0);
}
console.log(suma2(10, 20, 77));
//parametros predifinidos
function suma3(x, y) {
    if (y === void 0) { y = 2; }
    return Math.pow(x, y);
}
console.log(suma3(2));
// parametro con nombres
function resta(_a) {
    var x = _a.x, y = _a.y;
    return x - y;
}
console.log(resta({ x: 34, y: 55 }));
//parametro rest en suma
function suma4(num1, num2) {
    var rest = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        rest[_i - 2] = arguments[_i];
    }
    return num1 + num2 + rest.reduce(function (a, b) { return a + b; });
}
console.log(suma4(23, 23, 4, 3, 654, 67, 56, 34));
var b = function (valor) { return valor * -1; };
console.log(b(8888));
