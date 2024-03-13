// função para simular o procedimento de verificação das lampadas
function verificarInterruptores() {
	// simulando ação do primeiro interruptor
	let interruptor01 = true;
	// simulando ação do segundo interruptor
	let interruptor02 = !interruptor01;
	// simulando ação do terceiro interruptor
	let interruptor03 = interruptor01 || interruptor02;

	// retornando a lista de estado dos interruptores
	return [interruptor01, interruptor02, interruptor03];
}

// função para determinar qual interruptor controla qual lampada
function determinarMapeamentoInterruptor() {
	const estadosLampadas = verificarInterruptores();

	console.log("Estado das lampadas na primeira visita:");
	console.log("Lampada 01:", estadosLampadas[0] ? "Acesa" : "Apagada");
	console.log("Lampada 02:", estadosLampadas[1] ? "Acesa" : "Apagada");
	console.log("Lampada 03:", estadosLampadas[2] ? "Acesa" : "Apagada");

	// segunda visita: descobrindo qual interruptor contral qual lampada
	console.log("\nSegunda visita:");
	if (estadosLampadas[0]) {
		console.log("O primeiro interruptor controla a lampada 1.");
	} else if (estadosLampadas[1]) {
		console.log("O segundo interruptor controla a lampada 1.");
	} else {
		console.log("O terceirp interruptor controla a lampada 1.");
	}

	if (estadosLampadas[2]) {
		console.log("O terceiro interruptor controla a lampada 2");
	} else {
		console.log("O primeiro interruptor controla a lampada 2");
	}

	if (!estadosLampadas[1]) {
		console.log("O segundo interruptor controla a lampada 3");
	} else {
		console.log("O terceiro interruptor controla a lampada 3");
	}
}

// executa a função para determinar o mapeamento dos interruptores
determinarMapeamentoInterruptor();
