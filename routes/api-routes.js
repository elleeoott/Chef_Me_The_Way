//Require models directory

var db = require("../models");

//Set up for exporting pulled data from API

module.exports = function(app, passport) {

    app.get("/api/posts"), function(req, res) {

        var query = {};
        if (req.query)
    }

}