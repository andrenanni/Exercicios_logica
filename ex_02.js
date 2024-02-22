var salAtual = Number(prompt("Informe seu salario atual:"));

if (salAtual <= 2800){
    let aumento = salAtual - (20);
    let salNovo = salAtual + (20);
    alert(`Seu salario de ${salAtual} teve um adicional de 20% ou R$${aumento} totalizando ${salNovo} 1`);
}

else if (salAtual > 2800 && salAtual <= 7000){
    let aumento = salAtual - (15);
    let salNovo = salAtual + (15);
    alert(`Seu salario de ${salAtual} teve um adicional de 20% ou R$${aumento} totalizando ${salNovo} 2`);
}

else if (salAtual > 7000 && salAtual <= 15000){
    let aumento = salAtual - (10);
    let salNovo = salAtual + (10);
    alert(`Seu salario de ${salAtual} teve um adicional de 20% ou R$${aumento} totalizando ${salNovo} 3`);
}

else{
    let aumento = salAtual - (5);
    let salNovo = salAtual + (5);
    alert(`Seu salario de ${salAtual} teve um adicional de 20% ou R$${aumento} totalizando ${salNovo} 4`);
}
