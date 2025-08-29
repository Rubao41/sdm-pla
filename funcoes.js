// função declarativa
function saudacao(nome){
    return `Salve, ${nome}! Encostou na meca, marcha!`
}
console.log(saudacao('Arthur'))

// função anônima
const soma = function(a, b) {
    return a + b
}
console.log(soma(7, 7))

// função simples 

function simples(){
    let a = 10
    let b = 10
    let c = a + b
    console.log('O valor de c é : ' + c)
}
simples()

/*function simp(a, b){
    const c = a + b
    console.log('O valor de c é : ' + c)
    return c
}

simp(7, -7) */ 


//função arrow
const multiplicar = (a, b) => a * b
console.log(multiplicar(7, 7))

// função declarativa
function multiplicarDeclarativa(a, b){
    return a * b
}
console.log(multiplicarDeclarativa(7, 10))

/*Delcarativa da idade

function idade (idade){
    return idade
}
console.log(idade(19))

// Declarativa da Altura
const altura = function(altura){
    return `A altura é ${altura}!`
}
console.log(altura(1.87))

// arrow curso
const curso = (curso) => curso
console.log(curso('Ciências da Computação'))

// chamar funções
const funções = function(idade, altura, curso){
    return `tenho ${idade} anos, minha altura é ${altura} e curso ${curso}.`
}
*/


//Delcarativa da idade

function idade (idade){
    return `${idade}!`
}

// Anonima da Altura
const altura = function(altura){
    return `${altura}!`
}

// arrow curso
const curso = (curso) => `${curso}!`

// chamar funções
const chamar = function(idade, altura, curso){
    console.log(`Eu tenho ${idade} anos, minha altura é ${altura} e curso ${curso}.`)
}

chamar (idade(19), altura(1.80), curso("Ciências da Computação"))

// função parametro

function cumprimentar(nome = "Visitante"){
    return `Olá, ${nome}! Seja bem-vindo!`
}

//função auto-invocada
(function(){
    console.log('auta-invocada')
})()


//call back
function processar (valor, callback){
    const resultado = callback(valor)
    console.log(`resultado: ${resultado}`)
}

async function processarAsync (valor, callback){
    const resultado = await callback(valor)
    console.log(`resultado async: ${resultado}`)
}