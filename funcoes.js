// função declarativa
function saudacao(nome){
    return `Ola, ${nome}!`
}
console.log(saudacao('Arthur'))

// função anônima
const soma = function(a, b) {
    return a + b
}
console.log(soma(7, 7))

// função simples 

function simp(){
    let a = 7
    let b = -7
    let c = a + b
    console.log('O valor de c é : ' + c)
}
simp()  