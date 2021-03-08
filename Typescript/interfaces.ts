interface Persona {
    nombre: string;
    apellido: string;
    edad: number;
    padre: string;
}

function mostrarPersona(pPersona: Persona){
    console.log(pPersona);
    console.log('Nombre: ', pPersona.nombre);
    console.log('Apellido: ', pPersona.apellido);
    console.log('Edad: ', pPersona.edad);
    console.log('Padre', pPersona.padre);
}

mostrarPersona({nombre: 'Juan', apellido: 'Perez', edad: 25, padre: 'Luis'});
mostrarPersona({nombre: 'Luis', apellido: 'Asasaasdd', edad: 25, padre: 'Luis'});


interface Busqueda{
    (valor: string, buscar: string): boolean;
}

const miBusqueda: Busqueda = (v: string, b: string): boolean => {
    const result = v.search(b);
    return result > -1;
}

console.log(miBusqueda('h o l a', 'o l a'));