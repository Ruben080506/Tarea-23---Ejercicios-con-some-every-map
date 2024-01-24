const matriz = [
    [false, false, false],
    [false, false, false],
    [false, false, true],
  ];
  
  const True = matriz.some(buscar => buscar.includes(true));
  
  console.log(True); 