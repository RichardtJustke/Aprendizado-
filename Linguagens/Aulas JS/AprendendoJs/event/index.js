const idade = parseInt(prompt("Digite sua idade: "))
const resultado = podeEntrar(idade)
function podeEntrar(idade){
    if(idade>=18){
        return"Entrada Permitida"
    }else if(idade<=18){
        "Entrada negada"
    }else{
        "Erro na idade repetir!!!"
    }
}
alert (resultado)

