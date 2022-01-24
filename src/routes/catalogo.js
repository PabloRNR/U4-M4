const { Router } = require('express');
const router = new Router();
const _ = require('underscore');

const catalogo = require('../ejemplo.json');
// console.log(catalogo);

//consultar
router.get('/',(req, res) => {
    res.json(catalogo);
});

//publicar
router.post('/',(req,res) => {
    const {title, director, year, rating }= req.body;
    if (title && director && year && rating){
        const id = catalogo.length + 1;
        const newPelicula = {...req.body, id};
        //console.log(newPelicula);
        catalogo.push(newPelicula);
        res.json(catalogo);
        //res.json('Guardado OK!')
    } else {
        res.status(500).json({error: 'Formato incorrecto // faltan datos'});
    }
});

//borrar
router.delete('/:id',(req,res) => {
    const { id} = req.params;
    if (id) {
        _.each(catalogo,(movie, i) => {
        if (movie.id == id) {
                catalogo.splice(i,1);
        } else {
            res.send({error: 'ID no encontrado'});
        }
        });
        res.json(catalogo);
   }
});


//actualizar
router.put('/:id',(req,res) => {
    const { id} = req.params;
    const {title, director, year, rating }= req.body;
    if (id && title && director && year && rating){
        _.each(catalogo,(movie,i) => {
            if (movie.id === id) {
                movie.title = title;
                movie.director = director;
                movie.year = year;
                movie.rating = rating;
            } else {
                res.send({error: 'ID no encontrado'});
            }
        });    
    } else {
        res.status(500).json({error: 'Formato incorrecto !!!'});
    }
});

module.exports = router;