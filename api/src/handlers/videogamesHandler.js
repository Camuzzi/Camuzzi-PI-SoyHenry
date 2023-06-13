const {getAllVideogames} = require("../controllers/videogamesControllers/getAllVideogames");
const {getVideogameByName} = require("../controllers/videogamesControllers/getByName");
const {getById} = require("../controllers/videogamesControllers/getById");
const {createGame} = require("../controllers/videogamesControllers/createGame");

const getVideogamesHandler = async (req,res) => {
    const {name} = req.query;
    let allVideogames = [];
    try {

        if (name) {
            const videogameByName = await getVideogameByName(name);

            if (videogameByName.length === 0){
                return res.status(404).json({response: `There are no videogames with the name ${name}`})
            }

            res.status(200).json(videogameByName);

        } else{
            allVideogames = await getAllVideogames();
            res.status(200).json(allVideogames);
        }

    } catch (error) {
        res.status(400).json({error: error.message}) 
    }
}

const getVideogameByIdHandler = async (req,res) => {
    const {idVideogame} = req.params;

    const idSource = isNaN(idVideogame) ? "bdd" : "api";
    
    try {
        const idResult = await getById(idVideogame,idSource);
        res.status(200).json(idResult);
    } catch (error) {
        res.status(400).json({error: error.message}) 
    }
}


const createNewGameHandler = async (req,res) => {
    const {name,description,platforms,image,releaseDate,rating,genres} = req.body;

    try {
        const newGame = await createGame(name,description,platforms,image,releaseDate,rating,genres)
        res.status(201).json({ message: "Videogame created successfully!"})
       
    } catch (error) {
        res.status(400).json({error: error.message}) 
    }
}

module.exports = {getVideogamesHandler,getVideogameByIdHandler,createNewGameHandler};