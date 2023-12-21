// inicializar con la dependencia express
// importar el modulño de expres
const mainRoutes = require("./src/routes/mainRoutes")
const adminRoutes = require("./src/routes/adminRoutes")
const authRoutes = require("./src/routes/authRoutes")
const shopRoutes = require("./src/routes/shopRoutes")

const express = require('express');
const path = require('path');
// crear una instancia de express
const app = express();
const PORT = 3000;
const ejs = require('ejs')

// setear los ejs para ver las views
app.set('view engine', 'ejs');
app.set('views', './src/views');


// Transforma el body que pases por post en json
app.use(express.urlencoded());
app.use(express.json());

app.use(express.static('public'));

//llamar la peticion de rutas a travez del middleware y el archivo mainRoutes
app.use('/', mainRoutes);
app.use('/admin', adminRoutes)
app.use('/auth', authRoutes)
app.use('/shop', shopRoutes)


app.listen(PORT,()=>console.log(`Servidor corriendo en el puerto https http://localhost:${PORT}`))





// // para visualizar lo que llega del formulario
// app.use(express.urlencoded)

// // crear un servidor local
// app.get('/',(req,res)=>{
//     res.send('Hola Mundo respuesta del metodo get');
// })
// // usa metodo get con url contacto el responde el siguiente archivo del servidor
// app.get('/contacto', (request, response)=>{
//     response.sendFile(__dirname+"/contacto.html")
// })
// // es importante que ese url /contacto debe ser igual que el action en html formulario
// app.post('/contacto',(request,response)=>{
//     response.send('formulario recibido')
// })

// app.get('users',(req,res)=>{
//     res.send(__dirname+"/data")
// })

// const PORT = 3000;
// app.listen(PORT,()=>{console.log(`http://localhost:${PORT}`)})

