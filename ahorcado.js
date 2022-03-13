var botonIniciar = document.getElementById("iniciar-juego");

var botonNuevaPalabra = document.getElementById("nueva-palabra");

var palabras = ["QUESO", "JAMON", "ORACLE", "JAVASCRIPT", "COMPUTADORA", "CELULAR", "TECLADO", "VENTANA", "PUERTA", "ELEFANTE"];

function sortearPalabra(){
	return palabras[Math.floor(Math.random()* (palabras.length))];
}

String.prototype.replaceAt = function(index, replacement) {
    return this.substr(0, index) + replacement + this.substr(index + replacement.length);
}


var palabra;
var largoPalabra;
var palabraConGuiones;
var nErrores;

var perdio = true;
var gano = true;

botonNuevaPalabra.addEventListener("click", function(){
	var input = document.getElementById("input-nueva-palabra");

	var palabraNueva = input.value;

	if(palabraNueva == ""){
		return;
	}

	palabras.push(palabraNueva.toUpperCase());
	input.value = "";
	
})

botonIniciar.addEventListener("click", function(){
	perdio = false;
	gano = false;

	pincel.clearRect(0,0, 1200, 800);

	palabra = sortearPalabra();
	largoPalabra = palabra.length;
	nErrores = 0;
	palabraConGuiones = palabra.replace(/./g, "_ ");

	dibujarTablero(palabraConGuiones);
	dibujarCuerpo(nErrores);
});

window.addEventListener("keypress", function(tecla){
	if(gano || perdio)
		return;

	var letra = tecla.key.toUpperCase();
	var letraCoincide = false;
	for(var i = 0; i < largoPalabra; i++){
		if(letra == palabra[i]){
			palabraConGuiones = palabraConGuiones.replaceAt(i*2, letra);
			letraCoincide = true;
		}
	}

	if(!letraCoincide)
		nErrores++;

	
	pincel.clearRect(0,0, 1200, 800);
	dibujarTablero(palabraConGuiones);
	dibujarCuerpo(nErrores);
	
	

	if(nErrores > 5){
		perdio = true;
		dibujarMensajePerdio();
	}

	else if(palabraConGuiones.indexOf('_') < 0){
		gano = true;
		dibujarMensajeGano();
	}

	

	})


