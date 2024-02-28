var salAtual = Number(prompt("Informe seu salario atual:"));

function aumento(){
    return salAtual * porcent;
}

function salNovo(){
    return salAtual + aumento();
}

if (salAtual <= 2800){
    var porcent = 0.20;
    alert(`Seu salario de R$${salAtual} teve um adicional de 20% ou R$${aumento()} totalizando R$${salNovo()}.`);
}

else if (salAtual > 2800 && salAtual <= 7000){
    var porcent = 0.15;
    alert(`Seu salario de R$${salAtual} teve um adicional de 15% ou R$${aumento()} totalizando R$${salNovo()}.`);
}

else if (salAtual > 7000 && salAtual <= 15000){
    var porcent = 0.10;
    alert(`Seu salario de R$${salAtual} teve um adicional de 10% ou R$${aumento()} totalizando R$${salNovo()}.`);
}

else{
    var porcent = 0.05;
    alert(`Seu salario de R$${salAtual} teve um adicional de 5% ou R$${aumento()} totalizando R$${salNovo()}.`);
}