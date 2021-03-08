//Interface dentro de una clase
interface Humano {
    nombre: string;
    edad: number;
}

class Adulto implements Humano{
    nombre: string;
    edad: number;
    carro: boolean;

    constructor(pNombre: string, pEdad: number, pCarro: boolean) {
        this.nombre = pNombre;
        this.edad = pEdad;
        this.carro = pCarro;
    }    
}

class Nino implements Humano {
    nombre: string;
    edad: number;
    escuela: string;

    constructor(pNombre: string, pEdad: number, pEscuela: string){
        this.nombre = pNombre;
        this.edad = pEdad;
        this.escuela = pEscuela;
    }
}

const nino = new Nino('Luis', 12, 'asaas');
const adulto = new Adulto('Miguel', 12, true);

console.log(nino);
console.log(adulto);