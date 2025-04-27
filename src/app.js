import express from "express"
const app = express()

// Indicar para o express ler body com json
app.use(express.json())

app.get('/', (req, res) => {
    res.send('Hello world!')
})

const alunos = [
    { matricula: 122221, nome: "Guilherme", curso: "Analise e Desenvolvimento de Sistemas" },
    { matricula: 122222, nome: "Davy", curso: "Gestão de TI" },
    { matricula: 122223, nome: "Daniel", curso: "Ciencia da Computação" }
]

function getAlunosByMatricula(matricula) {
    return alunos.filter(aluno => aluno.matricula == matricula)
}

function buscarIndexAluno(matricula) {
    return alunos.findIndex(aluno => aluno.matricula == matricula)
}

app.get('/alunos', (req, res) => {
    res.status(200).send(alunos)
})

app.get('/alunos/:matricula', (req, res) => {
    res.json(getAlunosByMatricula(req.params.matricula))
})

app.post('/alunos', (req, res) => {
    alunos.push(req.body)
    res.status(201).send('Aluno adicionado com sucesso!')
})

app.delete('/alunos/:matricula', (req, res) => {
    const matricula = req.params.matricula;
    let index = buscarIndexAluno(matricula)
    alunos.splice(index, 1)
    res.send(`Aluno de matricula ${req.params.matricula} excluida com sucesso!`)
})

export default app
