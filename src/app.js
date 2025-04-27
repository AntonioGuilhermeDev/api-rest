const express = require("express") //importando modulo
const app = express() // instanciando o express
const port = 5500

// criar rota padräo ou raiz

app.get('/', (req, res) => {
    res.send('Hello world!')
})

// escutando a porta 

app.listen(port, () => {
    console.log(`Servidor rodando endereço http://localhost:${port}`)
})
