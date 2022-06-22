const express = require('express');
const app = express();

const port = process.env.PORT || 3000;

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
