define([
    'backbone',
    'jquery'
],function(Backnone,$){

    var Song = Backnone.Model.extend({
        defaults: {
            title: 'sing for the moment'
        }
    });

    return Song;

});