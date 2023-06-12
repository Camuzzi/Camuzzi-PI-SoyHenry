require('dotenv').config();
const {API_KEY} = process.env;
const { Op } = require('sequelize');

const axios = require('axios');
const {filterVideogames} = require("../../utils/index");
const {Videogame} = require("../../db");

const getVideogameByName = async (name) => {
    let apiVideogames = (await axios.get(`https://api.rawg.io/api/games?search=${name}&key=${API_KEY}`)).data.results;

    apiVideogames = filterVideogames(apiVideogames,"api");

    let bddVideogames = await Videogame.findAll({
        where: {
            name: {
                [Op.iLike]: `%${name}%`
            }
        }
    });


    return [...bddVideogames,...apiVideogames].slice(0,15);
}

module.exports = {getVideogameByName};