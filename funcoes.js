
function saudacao(nome){
    return `Olá, ${nome}! Seja bem-vindo(a).`
}
console.log(saudacao('Danilo'))
console.log(saudacao('Maria'))
console.log(saudacao('José'))

const soma = function(a, b){
    return a + b
}
console.log(soma(5, 3))
console.log(soma(10, 20))
console.log(soma(-1, 1))

const multiplicar  = (a, b) => a * b;

function multiplicarDeclarativa(a, b){
    return a * b;
}
console.log(multiplicar(5, 3))
console.log(multiplicar(10, 20))
console.log(multiplicar(-1, 1))



function cumprimentar(nome = "Danilo"){
    return `Olá, ${nome}! Como você está?`;
}


(function(){
    console.log("Função auto-invocada");
})();


function processar(valor, callback){
    const resultado = callback(valor);
    console.log(`Resultado: ${resultado}`);
}


async function processarAsync(valor, callback){
    const resultado = await callback(valor);
    console.log(`Resultado: ${resultado}`);
}