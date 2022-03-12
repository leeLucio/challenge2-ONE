var canvas = document.querySelector("#ahorcado");
var pincel = canvas.getContext("2d");

//Recibe una palabra y dibuja las lineas para la palabra
function dibujarPalabra(palabra){
	pincel.font = "60px Arial";
	pincel.fillStyle = "black"
	pincel.fillText(palabra, 300, 700);
}

//Recibe la palabra y dibuja el tablero y las lineas
function dibujarTablero(palabra){

	pincel.lineWidth = 5;
	pincel.strokeStyle = "black";

	pincel.beginPath();
	pincel.moveTo(0, 700);
	pincel.lineTo(200, 700);
	pincel.lineTo(100, 675);
	pincel.lineTo(0, 700);

	pincel.moveTo(100, 675);
	pincel.lineTo(100, 100);
	pincel.lineTo(400, 100);
	pincel.lineTo(400, 150);
	pincel.stroke();

	dibujarPalabra(palabra);
	
}

//Dibuja el cuerpo en relacion al numero de errores
function dibujarCuerpo(errores){
	pincel.lineWidth = 5;
	pincel.strokeStyle = "black";
	pincel.beginPath();
	
	if(errores > 0){
		pincel.arc(400, 200, 50, 0, 2 * 3.14);
	}
	
	if(errores > 1){
		pincel.moveTo(400,250);
		pincel.lineTo(400, 500);
	}

	if(errores > 2){
		pincel.lineTo(300, 600);
	}

	if(errores > 3){
		pincel.moveTo(400, 500);
		pincel.lineTo(500, 600);
	}

	if(errores > 4){
		pincel.moveTo(400, 350);
		pincel.lineTo(300, 250);
	}

	if(errores > 5){
		pincel.moveTo(400,350);
		pincel.lineTo(500, 250);
	}
	pincel.stroke();
}

function dibujarMensajePerdio(){
	pincel.font = "50px Arial";
	pincel.fillStyle = "red";
	pincel.fillText("Perdiste", 500, 500);
}

function dibujarMensajeGano(){
	pincel.font = "50px Arial";
	pincel.fillStyle = "red";
	pincel.fillText("Felicidades, Adivinaste la Palabra", 500, 500);
}

