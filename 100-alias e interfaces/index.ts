// el tipo es como algo que se puede usar como molde
type bolean = boolean | string;
const result: bolean ='string'; 



type coord ={
    x : number,
    y : number
}

function cor(cooo:coord){
    console.log(`la posicion de x es ${cooo.x} y de y es ${cooo.y}`);
}

let ponit:coord = {x:33, y:99}

cor(ponit)


//interfcaces

interface carro{
    ancho:number,
    largo:number
}
interface auto extends carro{
    color : string
}

const auto3 :auto ={
    ancho:8888,
    largo:222,
    color:"rojo",

}
console.log(`el color del auto es ${auto3.color}`);
