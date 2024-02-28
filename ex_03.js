var num = parseInt(prompt("Digite um número:"));
var result = 0;

if (num <=1){
    alert("Valor inválido! Informe um número maior que 1.");
}

for (let i = 0; i <= num; i++) {  
    result+=i;
}
alert (`O total entre os valores é ${result}.`);