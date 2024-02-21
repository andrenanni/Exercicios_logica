var litros = Number(prompt("Digite quantos litros deseja?"));
var valor = Number(prompt("Informe o valor do litro do combustivel:"))
var combTipo = prompt("Qual combustivel deseja? A para Álcool ou G para Gasolina");

var tipo = combTipo.toUpperCase();

if (tipo !== "A" && tipo !== "G"){
    alert("Combustivel indevinido");
}

if (tipo == "A"){
    if (litros <= 20){
        alert("teste");
    }
    else{
        
    }
}

if (tipo == "G"){
    if (litros <= 20){
        
    }
    else{
        
    }
}
