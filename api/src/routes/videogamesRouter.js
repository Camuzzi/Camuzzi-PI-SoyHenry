const { Router } = require('express');
const {getVideogamesHandler,getVideogameByIdHandler,createNewGameHandler} = require("../handlers/videogamesHandler")

const videogamesRouter = Router();

videogamesRouter.get('/',getVideogamesHandler);

videogamesRouter.get('/:idVideogame',getVideogameByIdHandler);

videogamesRouter.post('/',createNewGameHandler);

module.exports = videogamesRouter;