const express = require('express')
const app = express()

const hostname = 'localhost'
const PORT = 3000

/* configuração do express */
app.use(express.urlencoded({extended: true}))
app.use(express.json())
/* arquivos estáticos do express */
app.use(express.static('public'))
/* -------------------------------- */

/* --- Programação das Rotas ------ */
app.get('/', (req,res)=>{
    res.render('index.html')
})

/* --------------------------------- */
/* --- listen do servidor ---------- */
app.listen(PORT, hostname, ()=>{
    console.log(`Servidor rodando em ${hostname}:${PORT}`)
})