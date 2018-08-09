var express = require("express");

var app = express();

var burger = require("../models/burger.js");

app.get("/", function(req,res){
    burger.selectAll(function(data){
        var burgerObject = {
            burgers: data
        };
        console.log(burgerObject)
        res.render("index", burgerObject);
    });
})

app.get("/assets/css/burger_style.css", function(req,res){
    res.send(__dirname, "/assets/css/burger_style.css"); 
})

app.get("/assets/js/index.js", function(req,res){
    res.send(__dirname, "/assets/js/index.js"); 
})

app.post("/api/burger", function(req,res){
    console.log(req.body.burgerName);
    burger.insertOne(["burger_name, devoured"], [req.body.burgerName, false], function(data){
        var burgerObject = {
            burgers: data
        };
        console.log(burgerObject)
        res.render("index", burgerObject);
    })
    // location.reload();
})

app.put("/api/burger", function(req,res){
    console.log(req.body.name)
    burger.updateOne("devoured = true", "burger_name = '" + req.body.name + "'",function(data){

    })
})

module.exports = app;