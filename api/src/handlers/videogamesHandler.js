const {getAllVideogames} = require("../controllers/videogamesControllers/getAllVideogames");

const getVideogamesHandler = async (req,res) => {
    let allVideogames = [];
    try {
        allVideogames = await getAllVideogames();

        res.status(200).json(allVideogames);
    } catch (error) {
        res.status(400).json({error: error.message}) 
    }
}

// const getVideogameById = async (req,res) => {
//     try {
        
//     } catch (error) {
//         res.status(400).json({error: error.message}) 
//     }
// }

// const getByName = async (req,res) => {
//     try {
        
//     } catch (error) {
//         res.status(400).json({error: error.message}) 
//     }
// }

// const createNewGame = async (req,res) => {
//     try {
        
//     } catch (error) {
//         res.status(400).json({error: error.message}) 
//     }
// }

module.exports = {getVideogamesHandler};