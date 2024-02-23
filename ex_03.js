var num = parseInt(prompt("Digite um numero:"));
var result = 0;

if (num <=1){
    alert("Valor invalido! Informe um numero maior que 1");
}

for (let i = 0; i <= num; i++) {  
    result+=i;
}
alert (`O total entre os valores é de ${result}`);