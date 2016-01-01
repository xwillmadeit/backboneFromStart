define([
    'underscore',
    'backbone',
    'backboneLocalstorage',
    'models/todo'
],function(_,Backbone,backboneLocalstorage,Todo){
    var Todos = Backbone.Collection.extend({
        model: Todo,
        localStorage: new Store('todos-backbone'),
    });

    return new Todos();
})