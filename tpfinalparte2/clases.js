// Clases
class Jugador {
  constructor() {
    this.carril = 1;
    this.y = height - 50;
  }

  mostrar() {
    fill(0, 0, 255);
    ellipse(carriles[this.carril], this.y, 30, 30);
  }

  mover(direccion) {
    this.carril = constrain(this.carril + direccion, 0, carriles.length - 1);
  }
}

class Moneda {
  constructor() {
    this.carril = floor(random(3));
    this.y = -20;
    this.velocidad = 3;
  }

  mostrar() {
    fill(255, 215, 0);
    ellipse(carriles[this.carril], this.y, 20, 20);
  }

  mover() {
    this.y += this.velocidad;
  }

  recolectado(jugador) {
    return (this.carril === jugador.carril && dist(carriles[this.carril], this.y, carriles[this.carril], jugador.y) < 25);
  }
}

class Contador {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  mostrar() {
    fill(0);
    textSize(16);
    text(`Monedas: ${contadorMonedas}`, this.x, this.y);
  }
}
