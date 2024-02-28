let i = 0;
var num = [];

while (i < 5){
    let valor = prompt("Digite um numero:");
    num.push(valor);
    i++;
}

let maiorValor = 0;

for (let i = 0; i < 5; i++){
    if (num[i] > maiorValor){
        maiorValor = num[i];
    }
}

alert(maiorValor);