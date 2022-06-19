/* Alerta de bienvenida y explicación del proceso */
alert(
  "Bienvenido a Money Delta.\n\nPasos para registrar un gasto:\n\n1. Ingresa tu salario\n2. Ingresa el monto del gasto\n3. Selecciona la categoría"
);

/* Declaración de variables a utilizar */

//Salario del usuario
let salarioPaso1 = prompt("Ingresa tu salario: ");

// Contador para validar en qué paso del proceso vamos. Se comienza en 2 para mantener la lógica consistente ya que el paso 1 es ingresar salario.
let counter = 2;

// Input realizado en el prompt
let input;

// Monto de dinero del gasto realizado
let montoGasto;

//Suma total de todos los gastos realizados durante todo el proceso
let gastoTotal = 0;

// Pasos del proceso de registro de gastos
let paso2 =
  'Paso 2 - Ingresa el monto del gasto:\n\nIngresa "SALIR" para salir de la aplicación.';
let paso3 =
  'Paso 3 - Ingresa el número de la categoría de tu gasto:\n\n1. Ocio\n2. Mercado\n3. Restaurantes\n4. Medicamentos\n5. Educación\n\nIngresa "SALIR" para salir de la aplicación.';

/* Declaración de arreglo para guardar la cantidad de dinero gastado en cada categoría */
let categoriaArr = [
  { idCategoria: 1, categoria: "Ocio", monto: 0 },
  { idCategoria: 2, categoria: "Mercado", monto: 0 },
  { idCategoria: 3, categoria: "Restaurantes", monto: 0 },
  { idCategoria: 4, categoria: "Medicamentos", monto: 0 },
  { idCategoria: 5, categoria: "Educación", monto: 0 },
];

/* Formato de moneda para montos de dinero */
let formatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  minimumFractionDigits: 0,
});

while (true) {
  /* Solicita input de acuerdo al paso actual */
  if (counter == 2) {
    input = prompt(paso2);
  } else {
    input = prompt(paso3);
  }

  /* Se valida input para ver si el usuario desea salir de la aplicación */
  if (input.toLowerCase() == "salir") {
    alert("Has elegido salir de la aplicación. Hasta la próxima!");
    break;
  }

  /* Entrega los argumentos a la función del proceso actual */
  if (counter == 2) {
    montoGasto = darInput(input, counter);
    counter++;
  } else {
    darInput(input, counter);
    counter = 2;
    alert(
      "Estos son tus gastos actuales hasta el momento:\n\n" +
        categoriaArr[0].categoria +
        ": " +
        formatter.format(categoriaArr[0].monto) +
        "\n" +
        categoriaArr[1].categoria +
        ": " +
        formatter.format(categoriaArr[1].monto) +
        "\n" +
        categoriaArr[2].categoria +
        ": " +
        formatter.format(categoriaArr[2].monto) +
        "\n" +
        categoriaArr[3].categoria +
        ": " +
        formatter.format(categoriaArr[3].monto) +
        "\n" +
        categoriaArr[4].categoria +
        ": " +
        formatter.format(categoriaArr[4].monto) +
        "\n\nGasto total: " +
        formatter.format(gastoTotal) +
        "\nSalario: " +
        formatter.format(salarioPaso1)
    );
  }

  if (gastoTotal > salarioPaso1) {
    alert(
      "ATENCIÓN: Tus gastos actuales han superado tu salario! Recuerda gastar MENOS de lo que ganas."
    );
  }
}

/* Selecciona la opción de acuerdo al número ingresado. */
function darInput(input, counter) {
  while (true) {
    let valorInt = parseInt(input);

    if (counter == 2) {
      return valorInt;
    }

    if (counter == 3 && valorInt >= 1 && valorInt <= 5) {
      categoriaArr[valorInt - 1].monto += montoGasto;
      gastoTotal += montoGasto;
      break;
    }

    alert(
      "La opción ingresada no es válida. Por favor ingresa una opción válida."
    );
    break;
  }
}
