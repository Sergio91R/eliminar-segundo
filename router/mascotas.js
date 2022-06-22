const express = require('express');
const router = express.Router();

router.get('/',(req,res) => {
    res.render("mascotas",{
        arrayMascotas: [
            {id: 'jdjdjdjd', nombre: 'rex', descripcion:'Rex descripcion'},
            {id: 'jsjsjsjs', nombre: 'lola', descripcion:'lola descripcion'}
        ]
        
    })
})

module.exports = router;