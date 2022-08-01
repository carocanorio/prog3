let numeros = [1, 5, 7, 12, 89, 23];

/* EJ 1*/
let numerosDoble = numeros.map((num) => {
    return num * 2
});

/*EJ 2*/
let numerosString = numeros.map((num) => {
    return num.toString()
});

/*EJ 3*/
let nombres = ['franco', 'martina', 'leonardo', 'jose', 'lucia', 'josefina'];

let conMayuscula = nombres.map((nom) => {
    return nom.toUpperCase()
});

/*EJ 4 DEVOLVER SOLO EL NOMBRE*/
let personas = [
	{
        nombre: "Angelina Jolie",
        edad: 80
    },
    {
        nombre: "Eric Jones",
        edad: 2
    },
    {
        nombre: "Paris Hilton",
        edad: 5
    },
    {
        nombre: "Kayne West",
        edad: 16
    },
    {
        nombre: "Bob Ziroll",
        edad: 100
    }
];

let soloNombres = personas.map((nombre) => {
    return nombre.nombre
});

/*EJ 5*/
let matrix = personas.map((nom) => {
    let texto = nom.edad >= 60 ? nom.nombre + 'puede entrar a la Matrix' : nom.nombre + 'es demasiado peque';
    return texto
});

/*EJ 6*/
let html = personas.map((nom) => {
    return '<h2>' + nom.nombre + '</h2><p>' + nom.edad + '</p>'
});

/*FILTER*/

/*EJ 1*/
let numerosDos = [66, 3, 2, 5, 26, 101];

let cincoOMas = numerosDos.filter((num) => {
    return num > 5
});

//2

let pares = numerosDos.filter((num) => {
    return num % 2

} )
console.log();

//3
let words = ["dog", "wolf", "by", "family", "eaten", "camping"];

let menosDeCinco = words.filter( (num) => {
    return num.length < 5
}) 

console.log();

//4

let listaPersonas = [{ nombre: "Angelina Jolie", afiliado: true },
{ nombre: "Eric Jones", afiliado: false },
{ nombre: "Paris Hilton", afiliado: true },
{ nombre: "Kayne West", afiliado: false },
{ nombre: "Bob Ziroll", afiliado: true }];

let miembro = listaPersonas.filter ((per) => {
    return per.afiliado == true
})

console.log();




