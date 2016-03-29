var app = app || {};

(function(){
    app.Todo = Backbone.Model.extend({
        defaults: {
            title: ''
        }
    });
})();