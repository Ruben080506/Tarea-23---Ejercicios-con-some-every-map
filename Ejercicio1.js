const cadena = ["hola", "juan", "elefante", "cantar", "teclado", "anona"];

const cadena5 = cadena.filter(c => c.length == 5);
const hayCadenasLongitud5 = cadena5.length > 0;

console.log("Cadena:", cadena5);