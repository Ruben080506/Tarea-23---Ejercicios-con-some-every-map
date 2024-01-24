const frase = [
    "Bienvenidos a Esmeraldas tierra verde",
    "Pontificia Universidad católica del Ecuador sede en Esmeraldas",
    "Hola la PUCESE te da la bienvenida"
  ];
  
  const palabra = frase.some(item => item.includes("PUCESE"));
  
  console.log(palabra);