var result = 'string';
function cor(cooo) {
    console.log("la posicion de x es ".concat(cooo.x, " y de y es ").concat(cooo.y));
}
var ponit = { x: 33, y: 99 };
cor(ponit);
var auto3 = {
    ancho: 8888,
    largo: 222,
    color: "rojo",
};
console.log("el color del auto es ".concat(auto3.color));
