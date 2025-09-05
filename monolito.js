const express = require('express')
const app = express()

app.use(express.json())

let users = []
let orders = []

//rota para criar um usuário
app.post('/users', (req, res) => {
    const user = req.body
    users.push(user)
    res.send({ message: 'User created', user }
    )
})

//rota para criar um pedido
app.post('/orders', (req, res) => {
    const order = req.body
    orders.push(order)
    res.send({ message: 'Order created', order })
})

//rota para listar todos os pedidos e usarios
app.get('/dados', (req, res) => {
    res.send({ users, orders})
})

//iniciar o servidor na porta 3000
app.listen(3000, () => {
    console.log('Server is running on port 3000')
})