// devuelve un valor numerico
function fecha():Number {
    return new Date().getHours();
}
console.log(fecha());

// devuelve un valor string
function str():string {
    return "hola mundo"
}
console.log(str())

//no devuelve nada
function void1():void {
    console.log("no devuelvo nada");
}
void1()

//incluyendo paremetros
function suma(num1:number, num2:number):number {
    return num1 + num2;
}
console.log(suma(33,48));

//sumando 3 numeros y uno opcional -> ?
function suma2(num1:number, num2:number, num3?:number) {
    return num1 + num2 + ( num3 ||0 );
}

console.log(suma2(10,20,77));

//parametros predifinidos

function suma3(x:number, y:number=2):number {
    return Math.pow(x,y);
}
console.log(suma3(2))

// parametro con nombres

function resta({x,y}:{x:number,y:number}){
    return x-y
}
console.log(resta({x:34,y:55}))



//parametro rest en suma

function suma4(num1:number,num2:number,...rest:number[]):number{
    return num1+num2+rest.reduce((a,b)=> a+b)
}
console.log(suma4(23,23,4,3,654,67,56,34))


//alias de typo

type a = (valor:number) =>number;
const b:a = (valor)=> valor *-1;
console.log(b(8888))
