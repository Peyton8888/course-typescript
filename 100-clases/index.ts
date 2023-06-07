//clase basica

class Persona{
    nombre : string;
    apellido: string;
    edad : number;
}

const nPersona = new Persona()
nPersona.nombre ="santiago";
nPersona.apellido = "matias";
nPersona.edad =17;

//- publica - provada - Protegina
/*public- (predeterminado) permite el acceso al miembro de la clase desde cualquier lugar
*private- solo permite el acceso al miembro de la clase desde dentro de la clase
*protected- permite el acceso al miembro de la clase desde sí mismo y cualquier clase que lo herede, que se cubre en la sección de herencia a continuación*/

class Person{
    private nombre : string

    public constructor(nombre:string){
        this.nombre = nombre
    }
    //geter
    public getnombre():string{
        return this.nombre
    }   
}
const persona1 = new Person("matias");
console.log(persona1.getnombre())

//segundo
class Person2{

    public constructor(private nombre:string){}
    //geter
    public getnombre():string{
        return this.nombre  
    }   
}
const persona2 = new Person2("matias");
console.log(persona2.getnombre())

class Persona8{
  // name is a private member variable
  public constructor(private name: string) {}

  public getName(): string {
    return this.name;
  }
}
      
const person1 = new Persona8("Jane");

console.log(person1.getName());

//reaonly
class alumno {
    private readonly nombre : string ;
    public constructor(nombre:string){
        this.nombre = nombre
    }
    public getmostrar(){
        return this.nombre;
    }
    // no se puede por que es reaonly
    // public setcambiar(nombre:string ){
    //     this.nombre = nombre;
    // }

}

const alu = new alumno("santiago");
console.log(alu.getmostrar())


//implements - herencia

interface shape{
    getresult: ()=> number;
}

class cuadrado implements shape{
    constructor(protected readonly ancho : number, protected readonly alto: number){

    }
    public getresult():number {
        return this.alto * this.ancho
    }
}

const ar = new cuadrado(32,3);
console.log(ar.getresult())

//suma

interface suma{
    sumar:()=> number
}

class cal implements suma{
    public constructor(protected readonly num1: number, protected readonly num2:number){
    }
    sumar():number{
        return this.num1 + this.num2; 
    };
}

const app = new cal(23,32);
console.log(app.sumar())

// extends - extender

class Suma2 extends cal{
    constructor(num1:number){
        super(num1,num1)
    }
}

const mysuma = new Suma2(20);
console.log(mysuma.sumar())

//anular un metodo con override
// la overridepalabra clave es opcional cuando se anula un método y solo ayuda a evitar que se anule accidentalmente un método que no existe. 
interface multiplicacion {
    getresult :()=>number;
}

class multiplicacion2 implements multiplicacion{
    public constructor(protected readonly num1:number,protected readonly num2:number){}

    getresult():number {
        return this.num1 * this.num2;
    }
    toString():string{
        return `el primer numero es ${ this.num1} y el segundo es ${this.num2}`
    }
} 

class raiz extends multiplicacion2{

    public constructor(num1: number){
        super(num1,num1)
    }
    getresult(): number {
        return this.num1 * this.num1
    }
    override toString(): string {
        return `el numero es ${ this.getresult()}`
    }
}

const ra= new raiz(3);
console.log(ra.getresult())
console.log(ra.toString());


//clases abstractas

abstract class resta{
    public abstract getarea(): number

    public string():string{
        return `la resta es ${this.getarea()}`
    }

}

class resta2 extends resta{
    public constructor(protected readonly num1: number,protected readonly num2: number ){
        super()
    }
    public getarea(): number {
        return this.num1 - this.num2}
    
}

const cla = new resta2(2,2)
console.log(cla.getarea())