function criaFaixaPreco(tooltip,minimo,maximo) {
    return{
        tooltip,
        minimo,
        maximo
    }
}

let faixas2 = [
    criaFaixaPreco('a',10,100),
    criaFaixaPreco('b',100,1000),
    criaFaixaPreco('c',1000,10000)
]

console.log(faixas2)
