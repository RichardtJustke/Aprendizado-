let valorConta = parseFloat(prompt("Qual o valor da conta: R$ "));
let valorGorjeta = parseFloat(prompt("Qual a porcentagem da garçom:"));
let valorPessoas = parseInt(prompt("Quantas pessoas tem na mesa:"));

function valores(valorConta,valorGorjeta, valorPessoas){
    let porcentagem = valorGorjeta/100;
    let gorjeta = valorConta*porcentagem;

    return valorConta+gorjeta;
}
function divisao(valores, valorPessoas){
    let partilhar =  valores/valorPessoas;
    return partilhar
}
let resultado = valores(valorConta,valorGorjeta, valorPessoas);
let resultadoPorPessoa= divisao(valores, valorPessoas);
alert("Os valores para cada um seriam: R$ " + resultadoPorPessoa.toFixed(2) + "isso com o valor da gorjeta incluso!")


