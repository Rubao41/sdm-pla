let numeros = [1, 2, 3, 4, 5];
console.log("Array original:", numeros);
console.log(numeros[0]); // Acessando o primeiro elemento
console.log(numeros[2]); // Acessando o terceiro elemento

let frutas = ["maçã", "banana", "laranja"];
frutas.push("uva"); // Adicionando um elemento ao final
frutas.unshift("morango"); // Adicionando um elemento ao início
console.log(frutas);

frutas.forEach((fruta, index) => {
    console.log(`Índice ${index}: ${fruta}`);
}
)

let misto = [42, "texto", true, null, { chave: "valor" }, [1, 2, 3]];
console.log(misto);
console.log("Array misto:", misto.length);
console.log(misto[misto.length - 1]); // Acessando o último elemento

for (let i = 0; i < frutas.length; i++) {
    console.log(`Fruta no índice ${i}: ${frutas[i]}`);
}

for(let fruta of frutas){
    console.log(fruta)
}

for (let indice in frutas){
    console.log(`Índice ${indice}: ${frutas[indice]}`)
}


// frutas.pop();
// frutas.shift();
frutas.splice(1,3)
    console.log(frutas)


    let mapa = new Map();

    mapa.set("nome", "Danilo")
    mapa.set("altura", 1.78)

    console.log(mapa.get("nome"))

    console.log(mapa.has("idade"))

    mapa.delete("nome")
    mapa.clear();
    console.log(mapa.size)


    let conjunto = new Set([1 ,2 ,3 ,4 ,5 ,6])
    console.log(conjunto)
    conjunto.add(7)
    conjunto.delete(2)

    conjunto.forEach(valor => console.log(valor))

    let pessoa = {
        nome: "Danilo",
        idade: 39,
        profissao: "Professor",
        endereco:{
            rua: "Rua A",
            numero: 123
        }
    }

    console.log(pessoa.nome)
    console.log(pessoa["idade"])
    console.log(pessoa.endereco.rua)


    delete pessoa.endereco