require('dotenv').config();
const {API_KEY} = process.env;

const axios = require('axios');
const {getAllVideogames} = require("./getAllVideogames");
const {filterVideogames} = require("../../utils/index");
const {Genre,Videogame} = require("../../db");

const createGame = async (name,description,platforms,image,releaseDate,rating,genres) => {

    const allVideogames = await getAllVideogames();

    const validation = allVideogames.find( element => element.name === name );

    if(validation){
        throw Error(`There is already a game with the name ${name}, please choose another one!`)
    } else {
        const newGame = await Videogame.create({name,description,platforms,image,releaseDate,rating});

        let genresIds = await Genre.findAll({
            where : {
                name: genres
            }
        });

        genresIds = genresIds.map( element => element.id);

        await newGame.addGenres(genresIds);
        
        return newGame;
    }

};

module.exports = {createGame};