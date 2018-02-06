//here we load the modules that we reated on the server.js page
var Task = require('./controllers/note.js');

module.exports = function (app) {

    //GET '/' will serve up the full collection of notes
    app.get('/notes', function(req, res){
        Task.get_all(req,res);
    });

    //GET '/:name' will bring up the document of that particular note.
    app.get('/notes/:id', function(req, res){
        Task.get_one(req,res);
    });

    //DELETE '/remove/:name/' will delete a name from the database.
    app.delete('/notes/:id', function(req,res){
        Task.remove(req, res);
    });

    app.delete('/notes', function(req, res){
        Task.get_all(req,res);
    });

    //Put/' will update value in database using provided note
    app.put('/notes/:id/:title/:description', function(req,res){
        Task.update(req, res);
    });

    //POST '/text will add a new note to the database with a specified title
    app.post('/:text', function(req, res){
    Task.add(req,res);
    });
 
}
