// Sequência a)
const sequenciaA = [1, 3, 5, 7];
const proximoNumeroA = sequenciaA[sequenciaA.length - 1] + 2;
console.log("Proximo numero na sequencia a):", proximoNumeroA);

// Sequencia b)
const sequenciaB = [2, 4, 8, 16, 32, 64];
const proximoNumeroB = sequenciaB[sequenciaB.length - 1] * 2;
console.log("Proximo numero na sequencia b):", proximoNumeroB);

// Sequencia c)
const sequenciaC = [0, 1, 4, 9, 16, 25, 36];
const proximoNumeroC = Math.pow(sequenciaC.length, 2);
console.log("Proximo numero na sequencia c):", proximoNumeroC);

// Sequencia d)
const sequenciaD = [4, 16, 36, 64];
const proximoNumeroD = Math.pow(sequenciaD.length * 2 + 1, 2);
console.log("Proximo numero na sequencia d):", proximoNumeroD);

// Sequencia e)
const sequenciaE = [1, 1, 2, 3, 5, 8];
const proximoNumeroE =
	sequenciaE[sequenciaE.length - 1] + sequenciaE[sequenciaE.length - 2];
console.log("Proximo numero na sequencia e):", proximoNumeroE);

// Sequencia f)
const sequenciaF = [2, 10, 12, 16, 17, 18, 19];
const proximoNumeroF = sequenciaF[sequenciaF.length - 1] + 1;
console.log("Proximo numero na sequencia f):", proximoNumeroF);
