let nivel;
let result = saldo(40,33);
console.log(result)

classificador ()   

console.log("O Herói tem saldo de " + result + " e está no nível de " + nivel)



function saldo(numVit, numDer){
    saldoRank = numVit - numDer;
    return saldoRank
}

function classificador() {
    if (result <= 10) {
        nivel = "Ferro"
    } else if (result >= 11 && result <= 20) {
        nivel = "Bronze"
    } else if (result >= 21 && result <= 50) {
        nivel = "Prata"
    } else if (result >= 51 && result <= 80) {
        nivel = "Ouro"
    } else if (result >= 81 && result <= 90) {
        nivel = "Diamante"
    } else if (result >= 91 && result <= 100) {
        nivel = "Lendário"
    } else if (result >= 101 ) {
        nivel = "Imortal"
    }       
}