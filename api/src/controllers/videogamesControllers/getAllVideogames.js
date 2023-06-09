require('dotenv').config();
const {API_KEY} = process.env;

const axios = require('axios');
const {Videogame} = require("../../db");

const {filterVideogames} = require('../../utils/index');


const getAllVideogames = async () => {

    let apiVideogames = [];

    for (let i = 1; i < 10; i++) {
    
        const { data } = await axios.get(`https://api.rawg.io/api/games?key=${API_KEY}&page=${i}&page_size=25`);

        apiVideogames.push(...data.results);
    }


    apiVideogames = filterVideogames(apiVideogames);

    const bddVideogames = await Videogame.findAll();

    return [...bddVideogames, ...apiVideogames];

}

module.exports = {getAllVideogames};