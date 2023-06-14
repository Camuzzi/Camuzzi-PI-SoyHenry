
const filterVideogames = (info,source) => {

    //Filtramos y ordenamos la data para varios videojuegos

    if (Array.isArray(info) && source === "api"){
        return info.map( (element) => {
            return {
                id: element.id,
                name: element.name,
                description: element.description,
                platforms: element.platforms?.map( e => e.platform.name),
                image: element.background_image,
                releaseDate: element.released,
                rating: element.rating,
                genres: element.genres?.map((genre) => (genre.name)),
                created: false,
            };
        });
    }

    if (Array.isArray(info) && source === "bdd"){
        return info.map( (element) => {
            return {
                id: element.id,
                name: element.name,
                description: element.description,
                platforms: element.platforms,
                image: element.image,
                releaseDate: element.releaseDate,
                rating: element.rating,
                genres: element.genres?.map((genre) => (genre.name)),
                created: false,
            };
        });
    }

    // Filtramos y ordenamos la data para 1 sólo videojuego

    if (!Array.isArray(info) && source === "api"){
        
            return {
                id: info.id,
                name: info.name,
                description: info.description,
                platforms: info.platforms?.map( e => e.platform.name),
                image: info.background_image,
                releaseDate: info.released,
                rating: info.rating,
                genres: info.genres?.map((genre) => (genre.name)),
                created: false,
            };
        
    }

    if (!Array.isArray(info) && source === "bdd"){
        
            return {
                id: info.id,
                name: info.name,
                description: info.description,
                platforms: info.platforms,
                image: info.image,
                releaseDate: info.releaseDate,
                rating: info.rating,
                genres: info.genres?.map((genre) => (genre.name)),
                created: false,
            };
        
    }


};

const filterGenres = (data) => {
    return data.map( (element) => {
        return {
            id: element.id,
            name: element.name
        }
    })
}

module.exports = {filterVideogames,filterGenres};