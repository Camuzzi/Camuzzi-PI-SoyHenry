
const filterVideogames = (array) => {
    return array.map( (element) => {
        return {
            id: element.id,
            name: element.name,
            description: element.description,
            platforms: element.platforms?.map( e => e.platform.name),
            image: element.background_image,
            rating: element.rating,
            created: false,
        };
    });
};

module.exports = {filterVideogames};