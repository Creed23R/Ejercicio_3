let nombres = "Kevin Jhoel";
let apellidos = "Rios Nicho";

let estudiante = nombres.concat(' ', apellidos);
console.log(estudiante)

let estudianteMayus = estudiante.toUpperCase();
console.log(estudianteMayus);

let estudianteMinus = estudiante.toLowerCase();
console.log(estudianteMinus);

let numLetras = estudiante.length;
console.log(numLetras);

let firstLetraNomb = nombres.charAt(0,1);
console.log(firstLetraNomb);

let firstLetraApes = apellidos.charAt(0,1);
console.log(firstLetraApes);

let notSpaces = estudiante.replace(/ /g,'');
console.log(notSpaces);

let include = estudiante.includes(nombres);
console.log(include)


