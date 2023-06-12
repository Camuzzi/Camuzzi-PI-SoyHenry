const { Router } = require('express');
const {getVideogamesHandler,getVideogameById} = require("../handlers/videogamesHandler")

const videogamesRouter = Router();

videogamesRouter.get('/',getVideogamesHandler);

videogamesRouter.get('/:idVideogame',getVideogameById);

videogamesRouter.get('/name',(req,res)=>{
    res.status(200).send("Acá se muestran las concidencias");
});

videogamesRouter.post('/',(req,res)=>{
    res.status(200).send("Acá se crea un nuevo videojuego");
});

module.exports = videogamesRouter;