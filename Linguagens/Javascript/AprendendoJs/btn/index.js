const botao = document.querySelector(`#verificar`);


function lidarComClique(){
let idadeUsuariuo = parseInt(prompt("Digite sua idade: "));
let res = verificarIdade(idadeUsuariuo);
alert(res);
}


function verificarIdade(idadeUsuariuo) {
    if (idadeUsuariuo >= 18) {
        return "Maior de idade";
    } else {
        return "Menor de idade";
    }
}
botao.addEventListener('click', lidarComClique);