define([
    'backbone'
],function(Backbone){
    var Todo = Backbone.Model.extend({
        defaults: {
            title: ''
        }
    });
    return Todo;
})