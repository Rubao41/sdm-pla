let numeros = [1, 2, 3, 4, 5]
console.log(numeros)
console.log(numeros[0])

let frutas = ['banana', 'maçã', 'laranja']
frutas.push('uva') // adiciona um elemento no final do array
frutas.unshift('abacaxi') // adiciona um elemento no início do array
console.log(frutas)

frutas.forEach((frutas, index) => {
    console.log(`Índice ${index}: ${frutas}`)
}
)

let misto = [7, 'texto', true, null, {chave: 'valor'}, [1, 2, 3]]
console.log(misto)
console.log(misto.length) // tamanho do array
console.log(misto[misto.length - 1]) // último elemento do array

for (let i = 0; i < frutas.length; i++) {
    console.log(`Fruta no índice ${i} : ${frutas[i]}`)
}

for (let fruta of frutas) {
    console.log(fruta)
}

for(let indice in frutas){
    console.log(`Índice ${indice}: ${frutas[indice]}`)
}

//frutas.pop() // remove o último elemento do array
//frutas.shift() // remove o primeiro elemento do array
//frutas.splice(1, 1) // remove 1 elemento a partir do índice 1
frutas.splice(1,3) // remove 3 elementos a partir do índice 1
console.log(frutas)

let map = new Map() // manipular objetos
map.set('name', 'joao')
map.set('age', 25)

console.log(map.get('name'))
console.log(map.has('hight'))

map.delete('age')
map.clear()
console.log(map.size)

let group = new Set([1, 2, 3, 4, 5, 6, 7 ])
console.log(group)
group.add(8)
group.delete(3)

group.forEach((value) => {
    console.log(value)
}
)

let people = {
    name: 'Arthur',
    age: 19,
    profission : 'vagabundo',
    address: {
        street: 'Rua tal',
        number: 123
    }
}

console.log(people.name)
console.log(people['age'])
console.log(people.address.street)