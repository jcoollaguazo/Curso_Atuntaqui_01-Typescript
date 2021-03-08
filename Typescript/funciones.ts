function nombre () {
    console.log('Funcion');
}

const sumar:(a: number, b: number) => number = function (a: number, b: number) {
    return a + b;
}

const sumar2 = function(a: number, b: number): number {
    return a + b;
}

const sumar3: (a: number, b: number) => number = function (a, b) {
    return a + b;
}

console.log(sumar(2, 4));
console.log(sumar2(3, 7));
console.log(sumar2(43, 7));


function nombreCompleto (nombre: string, apellido?: string): string {
    if(apellido) return nombre + " "+ apellido;
    else return nombre;
}

console.log(nombreCompleto('Luis'));
console.log(nombreCompleto('Luis', 'Ayala'));

function nombreCompleto2 (nombre: string, ...restpNombre: string[]): string{
    return nombre + " " + restpNombre.join(' ');
}

console.log(nombreCompleto2('Roberto', 'Agustin', 'Miguel', 'Santiago', 'Samuel', 'Trujillo', 'Veracruz'));