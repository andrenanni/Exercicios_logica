var salAtual = Number(prompt("Informe seu salario atual:"));

if (salAtual <= 2800){
    let aumento = salAtual * 0.20;
    let salNovo = salAtual + aumento;
    alert(`Seu salario de R$${salAtual} teve um adicional de 20% ou R$${aumento} totalizando R$${salNovo}.`);
}

else if (salAtual > 2800 && salAtual <= 7000){
    let aumento = salAtual * 0.15;
    let salNovo = salAtual + aumento;
    alert(`Seu salario de R$${salAtual} teve um adicional de 20% ou R$${aumento} totalizando R$${salNovo}.`);
}

else if (salAtual > 7000 && salAtual <= 15000){
    let aumento = salAtual * 0.10;
    let salNovo = salAtual + aumento;
    alert(`Seu salario de R$${salAtual} teve um adicional de 20% ou R$${aumento} totalizando R$${salNovo}.`);
}

else{
    let aumento = salAtual * 0.05;
    let salNovo = salAtual + aumento;
    alert(`Seu salario de R$${salAtual} teve um adicional de 20% ou R$${aumento} totalizando R$${salNovo}.`);
}