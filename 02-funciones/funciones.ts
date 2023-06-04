//funciones en typescript

function suma(num: number, num2: number){
    return num + num2;
}
console.log(suma(80,20));

//siempre se debe declarar la variable en el parametro de la funcion

function uperstring(str:string){
    return str.toUpperCase();
}
console.log( uperstring("hola MUNdo"));

function tresvalues(nombre: string, id:number, estado:boolean){
    return nombre.charAt, id.toFixed(2), estado!= estado
}
console.log(tresvalues("santiago", 888888, true));


//no retonos en funciones

const marcar =(nombre: string, apellido: string, estado: boolean):void=>{
    console.log(`hola soy ${nombre} mi apellido es ${apellido} estoy en estado ${estado}`)
}
marcar("santiago","matias",false);

//retorno de valores

const sumados = (num_1, num_2):number=>{
    return num_1 + num_2
}
console.log(suma(56,43))