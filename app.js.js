const express = require('express')
const bodyParser = require('body-parser')
const userRoutes  = require('./routes/userRoutes')
const cors = require ('cors')

const app = express()
app.use(cors())


//configurar o body-parser para processarr o body das requisições
app.use(bodyParser.json())

//usara as rotas de usuárioo
app.use('/api', userRoutes)


//iniciar o servidor
const PORT = 3000
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`)
})