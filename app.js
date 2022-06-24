const express = require('express');
const app = express();

const port = process.env.PORT || 3000;

//conexion a la base de datos
const mongoose = require('mongoose');

const user = 'SergioPrub';
const password = 'Millonarios1991';
const dbname = 'veterinaria';
const uri = `mongodb+srv://${user}:${password}@cluster0.kyxyrye.mongodb.net/${dbname}?retryWrites=true&w=majority`

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(()=> console.log('conectado a mongodb')) 
  .catch(e => console.log('error de conexión', e))


//motor de plantillas
app.set("view engine", "ejs");
app.set("views", __dirname + "/views");

app.use(express.static(__dirname + "/public"))

//rutas web
app.use('/',require('./router/rutaWeb'));
app.use('/mascotas',require('./router/mascotas.js'));

app.use((req,res,next) => {
    res.status(404).render("404", {
        titulo: "404",
        descripcion: "Titulo del sitio web"
    })
})



app.listen(port, () => {

console.log('servidor a su servicio en el puerto',port )
})
