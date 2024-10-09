//Faustino Ugrina Natale
//https://www.youtube.com/watch?v=O1fSKIjEqvY
//el video tiene un problema de atraso con la camara igual es entendible
let pantallaActual = 0;
let cantPantallas = 7; //10
let pantallaFinalActual = 0; //0, 1, 2
let cantFinales = 3;
let arregloPantallas = new Array(cantPantallas);
let arregloTextosPantallas = new Array(cantPantallas);
let arregloFinales = new Array(cantFinales);
let arregloTextosFinales = new Array(cantFinales);
let pantallas = true;
let creditos = false;
let finales = false;
let pantallaCreditos;
let botonInicio,
    botonReiniciar,
    botonCreditos,
    botonRebelarse,
    botonNoRebelarse,
    botonSi,
    botonNo = false;
function setup() {
    createCanvas(600, 600);
    for (let i = 0; i < cantPantallas; i++) {
        arregloTextosPantallas[i] = obtenerTextoArchivo("texto" + i + ".txt");
        if (i < cantFinales) {
            arregloTextosFinales[i] = obtenerTextoArchivo(
                "textofinal" + i + ".txt"
            );
        }
    }
}
function preload() {
    pantallaCreditos = loadImage("creditos.jpg");
    arregloPantallas[i] = loadImage("pantalla" + i + ".jpg");
    arregloFinales[i] = loadImage("final" + i + ".jpg");
}
function draw() {
    if (pantallas) {
        fill(240);
        stroke(0);
        image(arregloPantallas[pantallaActual], 0, 0, width, height);
        text(arregloTextosPantallas[pantallaActual], 10, 50);
    }
    if (pantallaActual == 5) {
        fill(240);
        image(arregloPantallas[pantallaActual], 0, 0, width, height);
        text(arregloTextosPantallas[pantallaActual], 10, 300);
    }
    if (creditos) {
        image(pantallaCreditos, 0, 0, width, height);
    }
    if (finales) {
        image(arregloFinales[pantallaFinalActual], 0, 0, width, height);
        fill(240);
        text(arregloTextosFinales[pantallaFinalActual], 10, 50);
    }
    mostrarBotones();
}
function obtenerTextoArchivo(archivo) {
    return String.join("\n", loadStrings(archivo));
}
function mousePressed() {
    if (pantallas) {
        if (pantallaActual != 0 && pantallaActual != 4 && pantallaActual != 6) {
            siguientePantalla();
        }
        if (pantallaActual == 0) {
            if (mouseX > 250 && mouseX < 350 && mouseY > 300 && mouseY < 350) {
                console.log("botonInicio");
                siguientePantalla();
            }
            if (mouseX > 250 && mouseX < 350 && mouseY > 400 && mouseY < 450) {
                console.log("botonCreditos");
                mostrarCreditos();
            }
        } //and posicion = "Iniciar" y "Creditos".
        if (pantallaActual == 4) {
            if (mouseX > 100 && mouseX < 200 && mouseY > 300 && mouseY < 350) {
                console.log("botonSi");
                siguientePantalla();
            }
            if (pmouseX > 400 && mouseX < 500 && mouseY > 300 && mouseY < 350) {
                console.log("botonNo");
                mostrarFinales(0);
            }
        } //"Si" y "No"
        if (pantallaActual == 6) {
            if (mouseX > 100 && mouseX < 200 && mouseY > 300 && mouseY < 350) {
                console.log("botonRebelarse");
                mostrarFinales(1);
            }
            if (pmouseX > 400 && mouseX < 500 && mouseY > 300 && mouseY < 350) {
                console.log("botonNoRebelarse");
                mostrarFinales(2);
            }
        } ////mostrar botones "Rebelarse" o "....."
    }
    if (finales) {
        if (mouseX > 250 && mouseX < 350 && mouseY > 450 && mouseY < 500) {
            console.log("botonReiniciar");
            reiniciarPantallas();
        }
    }
    if (creditos) {
        if (mouseX > 250 && mouseX < 350 && mouseY > 300 && mouseY < 350) {
            console.log("botonInicio");
            reiniciarPantallas();
        }
    }
}
function mostrarBotones() {
    if (finales) {
        dibujarBoton(250, 450, "Reiniciar");
    }
    if (creditos) {
        dibujarBoton(250, 300, "Inicio");
    }
    if (pantallas) {
        if (pantallaActual == 0) {
            dibujarBoton(250, 300, "Iniciar");
            dibujarBoton(250, 400, "Creditos");
        }
        if (pantallaActual == 4) {
            dibujarBoton(100, 300, "Si");
            dibujarBoton(400, 300, "No");
        }
        if (pantallaActual == 6) {
            dibujarBoton(100, 300, "Sucumbir");
            dibujarBoton(400, 300, "Rebelarse");
        }
    }
}
function dibujarBoton(posX, posY, texto) {
    fill(120);
    rect(posX, posY, 100, 50);
    fill(0);
    textSize(20);
    text(texto, posX + 15, posY + 30);
}
function reiniciarPantallas() {
    pantallaActual = 0;
    pantallas = true;
    finales = false;
    creditos = false;
}
function mostrarFinales(pantallaSeleccionada) {
    pantallaFinalActual = pantallaSeleccionada;
    pantallas = false;
    finales = true;
    creditos = false;
}
function mostrarCreditos() {
    pantallas = false;
    finales = false;
    creditos = true;
}
function siguientePantalla() {
    pantallaActual++;
    if (pantallaActual == cantPantallas) {
        pantallaActual = 0;
    }
}
