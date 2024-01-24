const datos = [
  { empleado: "José de la Cuadra", departamento: "Financiero", sueldo: 850},
  { empleado: "Verónica Andrade", departamento: "Sistemas", sueldo: 720},
  { empleado: "Juana Peña", departamento: "Pro-rectorado", sueldo: 755},
  { empleado: "Karla Macías", departamento: "Financiero", sueldo: 990},
  { empleado: "Pedro Flores", departamento: "Sistemas", sueldo: 1000},
];

const nuevosueldo = datos.map(usuario => ({
  empleado: usuario.empleado,
  departamento: usuario.departamento,
  sueldo: usuario.sueldo * 2
}));

console.log("Nuevo Sueldo:", nuevosueldo);