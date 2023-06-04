//arrays solo string
let array:string[] =["hola","mundo","como estan"]; 
//arrays number
let arrayNumber: number[]= [8,8,8,8];
//array opcional
let arrayop: [string | number| boolean | null] =["string"];
//agregar a un array vacio
let arr:string[] =[];
arr.push("Hola Mundo");arr.push("Hello Word"); arr.push("Como Estas"); arr.push("Que Tal");arr.push("no acepta otros valores que sena strings");
//array con reonly 
/**reaonly no acepta mas valores */
let reonly : readonly string[]= ["hola mundo"];
//inferencia de tipos en string
const inferencia:number[] = [1,2,3,4,5];
inferencia.push(6);
// inferencia.push("hola") asi no este : number typescript no acepta otros valores que no sena numeros
