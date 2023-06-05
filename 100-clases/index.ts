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
    private nombre : string

    public constructor(nombre:string){}
    //geter
    public getnombre():string{
        return this.nombre
    }   
}
const persona2 = new Person2("matias");
console.log(persona2.getnombre())