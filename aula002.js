// parâmetros e retorno são opcionais

function area(largura, altura){
    const area = largura * altura

    if(area > 20){
        console.log(`Valor acima do permitido: ${area}m².`)
    } else {
        return area
    }
}

console.log(area(4, 6))