// function quand on appuie sur =
function operate(operand, nombreUnUse, nombreDeuxUse) {
	nombreUnUse = +nombreUn.join("");
	nombreDeuxUse = +nombreDeux.join("");
	if (nombreDeux.length == 0) {
		displayDefinitif.innerHTML =
			"Il manque un nombre pour effectuer une opération";
		setTimeout(resetAll, 2000);
	} else {
		if (operand == "+") {
			displayDefinitif.innerHTML = nombreUnUse + nombreDeuxUse;
		} else if (operand == "-") {
			displayDefinitif.innerHTML = nombreUnUse - nombreDeuxUse;
		} else if (operand == "*") {
			displayDefinitif.innerHTML = nombreUnUse * nombreDeuxUse;
		} else if (operand == "/") {
			if (nombreDeux == 0) {
				displayDefinitif.innerHTML = "On ne divise pas par 0 ici";
				setTimeout(resetAll, 2000);
			} else {
				displayDefinitif.innerHTML = nombreUnUse / nombreDeuxUse;
			}
		}
	}
}

function resetAll() {
	nombreUn = [];
	nombreDeux = [];
	operand = "";
	displayDefinitif.innerHTML = "";
	displayTemporaire.innerHTML = "";
}

function clearPop() {
	if (operand.length == 0) {
		nombreUn.pop();
		displayTemporaire.innerHTML = nombreUn.join("");
	} else {
		nombreDeux.pop();
		displayTemporaire.innerHTML = nombreDeux.join("");
	}
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
const displayTemporaire = document.getElementById("displayTemporaire");
const displayDefinitif = document.getElementById("displayDefinitif");
const audioNombres = new Audio("./sons/mixkit-sci-fi-click-900.wav");
const audioOperands = new Audio(
	"./sons/mixkit-sci-fi-interface-robot-click-901.wav"
);
const audioEgal = new Audio("./sons/mixkit-sci-fi-robot-metal-click-1132.wav");

for (let a = 0; a < operands.length; a++) {
	operands[a].addEventListener("click", () => {
		audioOperands.play();
		if (operand == "") {
			if (displayDefinitif.innerHTML == "") {
				operand = operands[a].getAttribute("id");
			} else {
				nombreUn = [displayDefinitif.innerHTML];
				nombreDeux = [];
				operand = operands[a].getAttribute("id");
			}
		} else {
			operate(operand, nombreUnUse, nombreDeuxUse);
			nombreUn = [displayDefinitif.innerHTML];
			nombreDeux = [];
			operand = operands[a].getAttribute("id");
		}
	});
}

for (let i = 0; i < nombres.length; i++) {
	nombres[i].addEventListener("click", () => {
		audioNombres.play();
		let ephemereDisplay = nombres[i].getAttribute("id");
		if (operand == "") {
			nombreUn.push(ephemereDisplay);
			displayTemporaire.innerHTML = nombreUn.join("");
		} else {
			nombreDeux.push(ephemereDisplay);
			displayTemporaire.innerHTML = "";
			displayTemporaire.innerHTML = nombreDeux.join("");
		}
	});
}

egal[0].addEventListener("click", () => {
	audioEgal.play();
	setTimeout(function () {
		operate(operand, nombreUnUse, nombreDeuxUse);
	}, 2000);
});

reset[0].addEventListener("click", () => {
	resetAll();
});

clear[0].addEventListener("click", () => {
	clearPop();
});
