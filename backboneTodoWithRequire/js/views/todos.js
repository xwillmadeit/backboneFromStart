define([
    'jquery',
    'backbone',
    'underscore',
    'text!templates/todos.html'
],function($, Backnone, _, todosTemplate){
    var TodoView = Backbone.View.extend({
        tagName: 'li',
        template: _.template($('#item-template').html()),
        events: {
            'click .destroy': 'clear'
        },
        initialize: function(){
            this.listenTo(this.model,'destroy',this.remove);
        },
        clear: function(){
            this.model.destroy();
        },
        render: function(){
            this.$el.html(this.template(this.model.toJSON()));
            return this;
        }
    });
    return TodoView;
});