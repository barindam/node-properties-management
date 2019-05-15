"use strict"
var enviorment = require('../env/environments');
var PropertiesReader = require('properties-reader');
var properties = new PropertiesReader(enviorment);
   


class LoadProperties{
    
    constructor(){
        
    }
    getValueByPropertyName(name){

        return properties.get(name);
    }
}
module.exports = LoadProperties;
