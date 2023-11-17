// function quand on appuie sur =
function operate(signeOperation, nombreUnUse, nombreDeuxUse) {
	if (signeOperation == "+") {
		resultat = nombreUnUse + nombreDeuxUse;
	} else if (signeOperation == "-") {
		resultat = nombreUnUse - nombreDeuxUse;
	} else if (signeOperation == "*") {
		resultat = nombreUnUse * nombreDeuxUse;
	} else {
		resultat = nombreUnUse / nombreDeuxUse;
	}
	return console.log(resultat);
	//stocker le resultat en nombreUn (clear then push ou =)
}

let ephemereDisplay = "";
let operand = "";
let nombreUn = [];
let nombreDeux = [];
let nombreUnUse = "";
let nombreDeuxUse = "";
const nombres = document.getElementsByClassName("nombre");
const operands = document.getElementsByClassName("operand");
const reset = document.getElementsByClassName("reset");
const clear = document.getElementsByClassName("clear");
const egal = document.getElementsByClassName("egal");
const audioNombres = new Audio("./sons/mixkit-sci-fi-click-900.wav");
const audioOperands = new Audio(
	"./sons/mixkit-sci-fi-interface-robot-click-901.wav"
);
const audioEgal = new Audio("./sons/mixkit-sci-fi-robot-metal-click-1132.wav");
console.log(nombres);

for (let a = 0; a < operands.length; a++) {
	operands[a].addEventListener("click", () => {
		audioOperands.play();
		operand = operands[a].getAttribute("id");
	});
}

for (let i = 0; i < nombres.length; i++) {
	nombres[i].addEventListener("click", () => {
		audioNombres.play();
		let ephemereDisplay = nombres[i].getAttribute("id");
		if (operand.length == 0) {
			nombreUn.push(ephemereDisplay);
		} else {
			nombreDeux.push(ephemereDisplay);
		}
	});
}

egal[0].addEventListener("click", () => {
	audioEgal.play();
	nombreUnUse = +nombreUn.join("");
	nombreDeuxUse = +nombreDeux.join("");
	operate(operand, nombreUnUse, nombreDeuxUse);
	//creer un div qui affiche operate()
});

reset[0].addEventListener("click", () => {
	nombreUn = [];
	nombreDeux = [];
	operand = "";
});

clear[0].addEventListener("click", () => {
	// avec if statement choisir enter nombreUn et nombreDeux
	// retirer dernier str de nombreUn
	// retirer dernier str de nombreDeux
});

//creer une liste qui store nombreUN en addant string 1 2 3 si nombreUn est vide
//jusqu'a appuyer sur un boutton operand puis store nombreDeux
// puis appuyer sur = affichedisplay et reset la liste
