const readline = require('readline');

// Genera un número aleatorio entre 1 y 100
const numeroAleatorio = Math.floor(Math.random() * 100) + 1;
let intentos = 0;
const maxIntentos = 10;

// Configura la interfaz para leer desde la consola
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function jugar() {
  if (intentos >= maxIntentos) {
    console.log(`Lo siento, te quedaste sin intentos. El número correcto era ${numeroAleatorio}.`);
    rl.close();
    return;
  }

  rl.question("Adivina un número entre 1 y 100: ", (respuesta) => {
    const adivinanza = parseInt(respuesta);

    if (isNaN(adivinanza) || adivinanza < 1 || adivinanza > 100) {
      console.log("Por favor, ingresa un número válido entre 1 y 100.");
      return jugar(); // Vuelve a llamar a la función si la entrada es inválida
    }

    intentos++;

    if (adivinanza < numeroAleatorio) {
      console.log("Demasiado bajo.");
      jugar();
    } else if (adivinanza > numeroAleatorio) {
      console.log("Demasiado alto.");
      jugar();
    } else {
      console.log(`¡Felicidades! Adivinaste el número en ${intentos} intento(s).`);
      rl.close();
    }
  });
}

// Inicia el juego
jugar();
