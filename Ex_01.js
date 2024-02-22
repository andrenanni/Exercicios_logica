var litros = Number(prompt("Digite quantos litros deseja?"));
var valor = Number(prompt("Informe o valor do litro do combustivel:"))
var combTipo = prompt("Qual combustivel deseja? A para Álcool ou G para Gasolina");

var cal = litros * valor;


var tipo = combTipo.toUpperCase();

if (tipo !== "A" && tipo !== "G"){
    alert("Combustivel indevinido");
}

if (tipo == "A"){
    if (litros <= 20){
        let desc3 = cal-0.03;
        alert(`O total com desconto de 3% é de ${desc3}`);
    }
    else{
        let desc5 = cal-0.05;
        alert(`O total com desconto de 3% é de ${desc5}`);
    }
}

if (tipo == "G"){
    if (litros <= 20){
        let desc4 = cal-0.04;
        alert(`O total com desconto de 3% é de ${desc4}`);
    }
    else{
        let desc6 = cal-0.06;
        alert(`O total com desconto de 3% é de ${desc6}`);
    }
}
