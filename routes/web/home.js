//Nguyen Hoang Long - 30108990 Octotber/10
var express = require("express");

var router = express.Router();


router.get("/", function(req, res) {
    // console.log("hello I'm on the start page");
 res.render("home/");
 });
 //home page
 router.get("/home", function(req,res){
     res.render("home/home");
 });
//about page
 router.get("/about", function(req, res){
    res.render("home/about");
 });
//contact page
 router.get("/contact", function(req, res){
    res.render("home/contact");
 });
//services page
 router.get("/services", function(req, res){
    res.render("home/services");
 });
// project page
 router.get("/project", function(req, res){
    res.render("home/project");
 });

 module.exports = router;
