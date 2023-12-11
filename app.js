// inicializar con la dependencia express
// importar el modulño de expres
const express = require('express');
// crear una instancia de express
const app = express();

// para visualizar lo que llega del formulario
app.use(express.urlencoded)

// crear un servidor local
app.get('/',(req,res)=>{
    res.send('Hola Mundo respuesta del metodo get');
})
// usa metodo get con url contacto el responde el siguiente archivo del servidor
app.get('/contacto', (request, response)=>{
    response.sendFile(__dirname+"/contacto.html")
})
// es importante que ese url /contacto debe ser igual que el action en html formulario
app.post('/contacto',(request,response)=>{
    response.send('formulario recibido')
})

app.get('users',(req,res)=>{
    res.send(__dirname+"/data")
})

const PORT = 3000;
app.listen(PORT,()=>{console.log(`http://localhost:${PORT}`)})

