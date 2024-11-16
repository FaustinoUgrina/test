let objJuego;
let pantallaInicio;
let personajeImg; 
let obstaculoImg; 
let monedaImg;
let monedaSonido;
let crashSonido;

function preload() {
  personajeImg = loadImage("data/Mcqueen.png"); 
  obstaculoImg = loadImage("data/obstaculo.png"); 
  monedaImg = loadImage("data/moneda.png");
  monedaSonido = loadSound('data/monedasonido.mp3');
  crashSonido = loadSound('data/crash.mp3');
}

function setup() {
  createCanvas(640, 480);
  pantallaInicio = new PantallaInicio();
  objJuego = null;
}

function draw() {
  background(220);

  if (pantallaInicio.activa) {
    pantallaInicio.dibujar();
  } else {
    if (!objJuego) {
      objJuego = new Juego(3);
    }
    objJuego.dibujar();
  }
}

function mousePressed() {
  if (pantallaInicio.activa) {
    pantallaInicio.chequearBoton(mouseX, mouseY);
  } else if (objJuego && (objJuego.juegoTerminado || objJuego.gano)) {
    objJuego.chequearBotonesFin(mouseX, mouseY);
  }
}

function keyPressed() {
  if (objJuego && !pantallaInicio.activa) {
    objJuego.teclaPresionada(keyCode);
  }
}
