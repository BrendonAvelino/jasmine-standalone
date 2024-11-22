function inteiro(inteiro){
    if(inteiro %3 == 0){
        return "Fizz";
    }

    if(inteiro %5 == 0){
        return "Buzz";
    }
    return inteiro;
}   

function escola(nota){
    if (nota >= 7){
        return "Aprovado"
    } else {
        return "Reprovado"
    }
}