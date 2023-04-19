// CLONAGEM DE OBJETO

// objeto
const celular = {
    marcaCelular: 'ASUS',
    tamanhoTela: {
        horizontal: 155,
        vertical: 75
    },
    capacidadeBateria: 5000,
    ligar : function() {
        console.log("Fazendo ligação...")
    }
}
// método de clonagem 1
const novoObjeto = Object.assign({
    bateria: 5000
},celular) 
console.log(novoObjeto)

// método de clonagem 2
const objeto2 = {...celular}
console.log(objeto2)