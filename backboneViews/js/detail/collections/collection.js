define([
    'backbone',
    'jquery'
],function(Backbone,$){

    return Backbone.Collection.extend({
        url: 'js/goods.json'
    });

});