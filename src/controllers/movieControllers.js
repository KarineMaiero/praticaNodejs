const movies = require('../models/movies.json');

const getAll = (request, response) => {

    //objetivo: criar um filme

    //acessar a informação do filme atraves do body da requisicao
    
    const title = request.body.title;
    const genre = request.body.genre;
    
    //const { title, genre } = request.body;

    //construo o objetivo do novo filme
    let newMovie = {
            "id": Math.random().toString(32).substring(2, 6),
            "addedAt": new Date(),
            "title": title,
            "genre": genre
    }

    console.log('Novo filme', newMovie);
    //adicionar ele na lista

    //enviar uma resposta
    
    
    response.status(200).send(movies);
}

module.exports = {
    getAll
}