/*
for(let i = 1; i <= 10; i++) {
    if(i % 2 !== 0) {
        console.log(i)
    }
}

let i = 10
while(i >= 1) {
    if(i % 2 !== 0) {
        console.log(i)
    }
    i--
}

let i = 0
do {
    console.log('digitando!', i)
    i++
} while (i < 10)
*/
const pessoa = {
    nome:'Felipe',
    idade: 19
}
for (let chave in pessoa) {
    console.log(chave,pessoa['nome'])
}
