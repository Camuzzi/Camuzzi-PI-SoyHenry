require('dotenv').config();
const {API_KEY} = process.env;

const axios = require('axios');
const {filterVideogames} = require("../../utils/index");
const {Genre,Videogame} = require("../../db");

const getById = async (id,source) => {
    // let idVideogame = {};

    // if ( source === "api"){
    //     idVideogame = (await axios.get(`https://api.rawg.io/api/games/${id}?key=${API_KEY}`)).data;

    //     idVideogame = filterVideogames(idVideogame);
    // } else {
    //     idVideogame = await Videogame.findByPk(id);
    // }

    // return idVideogame;

    const videogame = source === "api" ? (
        (await axios.get(`https://api.rawg.io/api/games/${id}?key=${API_KEY}`)).data
    )
    : (
        await Videogame.findByPk(id, {
            include: { model: Genre, through: { attributes: [] } }
          })
    )

    return filterVideogames(videogame,source);

}

module.exports = {getById};