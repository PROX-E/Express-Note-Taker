const db = require("../db/db.json");
const fs = require("fs");
const uuid = require("uuid/v4");

module.exports = function(app) {
    app.get("/api/notes", function(req, res) {
      res.send(db);
    });

    app.post("/api/notes", function(req, res) {
        let noteId = uuid();
        
        let newNote = {
        id: noteId,
        title: req.body.title,
        text: req.body.text
        };
    })

};
