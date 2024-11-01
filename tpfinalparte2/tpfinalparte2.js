// Variables globales
let pantalla = "instrucciones";
let jugador;
let monedas = [];
let carriles = [100, 200, 300];
let contadorMonedas = 0;
let contador;

// Configuración inicial
function setup() {
  createCanvas(400, 400);
  jugador = new Jugador();
  contador = new Contador(10, 30); // Posición del contador
  for (let i = 0; i < 5; i++) {
    monedas.push(new Moneda());
  }
}

// Pantalla de instrucciones
function instrucciones() {
  background(200);
  textAlign(CENTER, CENTER);
  textSize(20);
  fill(0);
  text("Instrucciones:\nUsa las flechas para moverte\nentre los carriles y recolecta monedas", width / 2, height / 2 - 50);
  fill(100, 255, 100);
  rect(width / 2 - 50, height / 2 + 20, 100, 40);
  fill(0);
  text("Jugar", width / 2, height / 2 + 40);
}

// Pantalla de juego
function juego() {
  background(220);

  // Mostrar y mover al jugador
  jugador.mostrar();

  // Mostrar, mover y verificar si se recoge cada moneda
  for (let i = monedas.length - 1; i >= 0; i--) {
    monedas[i].mostrar();
    monedas[i].mover();
    if (monedas[i].recolectado(jugador)) {
      contadorMonedas++; // Incrementar el contador
      monedas.splice(i, 1);
      monedas.push(new Moneda());
    }
  }

  // Mostrar el contador de monedas
  contador.mostrar();
}

// Funciones de p5.js
function draw() {
  if (pantalla === "instrucciones") {
    instrucciones();
  } else if (pantalla === "juego") {
    juego();
  }
}

function mousePressed() {
  if (pantalla === "instrucciones" &&
      mouseX > width / 2 - 50 && mouseX < width / 2 + 50 &&
      mouseY > height / 2 + 20 && mouseY < height / 2 + 60) {
    pantalla = "juego";
  }
}

function keyPressed() {
  if (pantalla === "juego") {
    if (keyCode === LEFT_ARROW) {
      jugador.mover(-1);
    } else if (keyCode === RIGHT_ARROW) {
      jugador.mover(1);
    }
  }
}
