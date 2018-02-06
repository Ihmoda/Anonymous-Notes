var mongoose = require('mongoose');
var Note = mongoose.model('Note');
var moment = require('moment');

module.exports = {
    get_all: function(req, res){
        Note.find({}, function(err, result){
            if (err){
                console.log(err);
                res.send(err);
            } else {
                console.log("successfully retrieved notes");
                res.json(result);
            }
        })
    },
    add: function(req, res){
        new_task = new Note();
        new_task.text = req.params.text;
        new_task.save(function (err){
            if (err){
                console.log(err)
                res.redirect('/notes');
            } else {
                console.log("successfully saved note");
                res.redirect('/notes');
            }
        })
    },
    remove:  function(req,res){
        Note.remove({_id: req.params.id}, function(err){
            if (err){
                console.log(err);
                res.send("success");
            } else {
                res.redirect(303, "/notes");
            }
        })
    },
    get_one:  function(req, res){
        Note.findOne({_id: req.params.id}, function(err, result){
            if (err){
                console.log(err);
                res.redirect('/notes');
            } else {
                console.log("Successfully found 1 user");
                res.json(result);
            }
        });
    },
    update: function(req, res){
        Note.update({_id: req.params.id}, {title: req.params.title, description: req.params.description}, function(err, result){
            if (err){
                console.log(err);
                res.redirect('/note');
            } else {
                console.log("successfully changed title");
                res.redirect('/note');
            }
        });
    }
}