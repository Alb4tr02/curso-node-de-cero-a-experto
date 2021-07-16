const nata = {
    nombre: 'nata',
    apellido: 'patata',
    poder: 'costura',
    getNombre: function () {
        return `${this.nombre} ${this.apellido} ${this.poder}`
    }
}

const { nombre, apellido, poder, edad = 25 } = nata;

console.log(nombre, apellido, poder, edad);

function imprimeHeroeV1(heroe) {
    const { nombre, apellido, poder, edad = 25 } = heroe;
    console.log(nombre, apellido, poder, edad);
}

function imprimeHeroeV2({ nombre, apellido, poder, edad = 25 }) {
    console.log(nombre, apellido, poder, edad);
}

imprimeHeroeV1(nata);
imprimeHeroeV2(nata);

const heroes = ['Deadpool', 'Superman', 'Batman'];

const [h1, h2, h3] = heroes;

const [, , h] = heroes;
console.log(h2);
console.log(h);