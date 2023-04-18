/*
function maiorMenor(num1, num2) {
    if (num1>num2){
        console.log(`${num1} é o maior número`)
    } else {
        console.log(`${num2} é o mair número`)
    }
}
maiorMenor(13,10)
*/

let maiorValor = max(15,18)
console.log(maiorValor)

function max(num1,num2) {
    return num1 > num2 ? num1 :  num2
}