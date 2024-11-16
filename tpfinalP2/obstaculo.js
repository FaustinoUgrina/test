class Obstaculo {
  constructor(posX, posY) {
    this.posY = posY;
    this.posX = posX;
    this.ancho = 50; 
    this.alto = 75; 
  }

  dibujar() {
    
    image(obstaculoImg, this.posX - this.ancho / 2, this.posY - this.alto / 2, this.ancho, this.alto);
  }

  mover() {
    this.posY += 2; 
  }

  estaColisionado(personaje) {
    
    let distanciaX = abs(this.posX - personaje.posX);
    let distanciaY = abs(this.posY - personaje.posY);
    return distanciaX < this.ancho / 2 + 25 && distanciaY < this.alto / 2 + 37.5; 
    
  }

  fueraDePantalla() {
    return this.posY > height;
  }
}
