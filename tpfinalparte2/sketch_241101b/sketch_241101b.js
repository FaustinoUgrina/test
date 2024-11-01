let pantalla = "instrucciones"; // Estado del juego: "instrucciones" o "juego"
let jugador;
let monedas = [];
let carriles = [100, 200, 300]; // Tres carriles

function setup() {
  createCanvas(400, 400);
  jugador = new Jugador();
  for (let i = 0; i < 5; i++) {
    monedas.push(new Moneda());
  }
}
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

function mousePressed() {
  if (pantalla === "instrucciones" &&
      mouseX > width / 2 - 50 && mouseX < width / 2 + 50 &&
      mouseY > height / 2 + 20 && mouseY < height / 2 + 60) {
    pantalla = "juego";
  }
}
function juego() {
  background(220);

  // Mostrar y mover al jugador
  jugador.mostrar();

  // Mostrar, mover, y verificar si se recoge cada moneda
  for (let i = monedas.length - 1; i >= 0; i--) {
    monedas[i].mostrar();
    monedas[i].mover();
    if (monedas[i].recolectado(jugador)) {
      monedas.splice(i, 1);
      monedas.push(new Moneda()); // Agrega una nueva moneda cuando se recolecta una
    }
  }
}
function draw() {
  if (pantalla === "instrucciones") {
    instrucciones();
  } else if (pantalla === "juego") {
    juego();
  }
}

function keyPressed() {
  if (pantalla === "juego") {
    if (keyCode === LEFT_ARROW) {
      jugador.mover(-1); // Mover a la izquierda
    } else if (keyCode === RIGHT_ARROW) {
      jugador.mover(1); // Mover a la derecha
    }
  }
}
