require('dotenv').config();
const {API_KEY} = process.env;

const axios = require('axios');
const {Genre} = require("../../db");
const {filterGenres} = require("../../utils/index");


const getGenres = async () => {

    let allGenres = await Genre.findAll();

    if (allGenres.length === 0){
        allGenres= (await axios.get(`https://api.rawg.io/api/genres?key=${API_KEY}`)).data.results;
        
        const filterGenresArray = filterGenres(allGenres);

        allGenres = newGenresArray(filterGenresArray);

    } 


    return allGenres;

}

const newGenresArray = async (info) => {
    const newGenres = await Genre.bulkCreate(info);
    return newGenres;
}

module.exports = {getGenres};