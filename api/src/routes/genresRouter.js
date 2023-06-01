const { Router } = require('express');

const genresRouter = Router();

genresRouter.get("/",(req,res) => {
    res.status(200).send("Acá se muestran los géneros")
})

module.exports = genresRouter;
