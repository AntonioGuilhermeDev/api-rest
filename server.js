import app from './src/app.js'

const PORT = 5500


// escutando a porta 
app.listen(PORT, () => {
    console.log(`Servidor rodando endereço http://localhost:${PORT}`)
})