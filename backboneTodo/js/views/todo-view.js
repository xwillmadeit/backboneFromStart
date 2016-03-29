var app = app || {};

(function($){
    app.TodoView = Backbone.View.extend({
        tagName: 'li',
        template: _.template($('#item-template').html()), //获取模板
        events: {
            'click .destroy': 'clear'
        },
        initialize: function(){
            this.listenTo(this.model, 'destroy', this.remove);
        },
        clear: function(){
            this.model.destroy();
        },
        render: function(){
            this.$el.html(this.template(this.model.toJSON()));
            return this;
        }
    });
})(jQuery);