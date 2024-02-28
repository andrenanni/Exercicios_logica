var litros = Number(prompt("Digite quantos litros deseja?"));
var valor = Number(prompt("Informe o valor do litro do combustivel:"))
var combTipo = prompt("Qual combustivel deseja? A para Álcool ou G para Gasolina");

var cal = litros * valor;

var tipo = combTipo.toUpperCase();

if (tipo !== "A" && tipo !== "G"){
    alert("Combustivel indevinido!");
}

if (tipo == "A"){
    if (litros <= 20){
        let desc = cal-(cal*0.03);
        alert(`O total com desconto de 3% é de ${desc}.`);
    }
    else{
        let desc = cal-(cal*0.05);
        alert(`O total com desconto de 5% é de ${desc}.`);
    }
}

if (tipo == "G"){
    if (litros <= 20){
        let desc = cal-(cal*0.04);
        alert(`O total com desconto de 4% é de ${desc}.`);
    }
    else{
        let desc = cal-(cal*0.06);
        alert(`O total com desconto de 6% é de ${desc}.`);
    }
}