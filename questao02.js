const readline = require("readline");

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

function verificarFibonacci(numero) {
	let a = 0;
	let b = 1;
	while (b < numero) {
		const temp = a;
		a = b;
		b = temp + b;
	}
	if (b === numero) {
		console.log(numero + " Pertence à sequência de fibonacci.");
	} else {
		console.log(numero + " Não pertence à sequência de Fibonacci.");
	}
}

function getInput() {
	return new Promise((resolve) => {
		rl.question("Informe um número: ", function (numeroInformado) {
			resolve(numeroInformado);
		});
	});
}

getInput()
	.then((numeroInformado) => {
		verificarFibonacci(parseInt(numeroInformado));
		rl.close();
	})
	.catch((error) => {
		console.log("Erro ao ler entrada do usuário:", error);
		rl.close();
	});
