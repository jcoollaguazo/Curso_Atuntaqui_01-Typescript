//Array

let numeros: number[] = [13, 3, 4, 5, 6, 7];

console.log(numeros);
console.log('Numeros: ' ,numeros);
console.log(`Numeros: ${numeros}`);


//number
let num1: number = 0;
num1 = Number('04');

//string 
let str1: string = 'Cap. Atuntaqui';

console.log(`${num1} esto es un numero ${str1} Esto es un string`);

//boolean

let bool1: boolean = false;

console.log('Booleano', bool1);

//tupla
let sitios: [string, number] = ['Casa', 2800]; 

console.log('Tupla', sitios);

//Enum
enum Estado {
    Offline,    //0
    Online,     //1
    Indefinido  //2
}

//any
let any1: any;

any1 = 2;
any1 = 'coop';
any1 = true;

let stat: Estado = Estado.Online;

console.log('Enum: ', stat);

//unknown
let sinTipo: unknown = 'Hola';
sinTipo = 14;


//void

function vacio(): void {
    console.log('Vacio');
}

//number
function pasoNumber(a: number, b: number) : number {
    console.log(a + b);
    return a + b;
}

const resultado = pasoNumber(12.2, 3);

console.log(`Resultado: ${resultado}`);