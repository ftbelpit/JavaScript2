// CLONAGEM DE OBJETO

// objeto
const computador = {
    teclado: 'Logitech',
    mouse: 'HyperX',
    volumeRGB: 5000,
    ligar : function() {
        console.log("Ligando computador...")
    }
}
// método de clonagem 
const novoObjeto = Object.assign({
    preco: 20000
},computador) 
console.log(novoObjeto)