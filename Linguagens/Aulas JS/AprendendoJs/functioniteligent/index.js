function analisarNumero(num){
if(num>0){
    return"positivo";
}else if(num<0){
    return"negativo";
}else{
    return"zero";
}
    
}

console.log(analisarNumero(0));