import express from "express"
const app = express()


app.get('/', (req, res) => {
    res.send('Hello world!')
})

const alunos = [
    { matricula: 122221, nome: "Guilherme", curso: "Analise e Desenvolvimento de Sistemas" },
    { matricula: 122222, nome: "Davy", curso: "Gestão de TI" },
    { matricula: 122223, nome: "Daniel", curso: "Ciencia da Computação" }
]

app.get('/alunos', (req, res) => {
    res.status(200).send(alunos)
})

export default app
