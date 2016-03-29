var app = app || {};

(function($){
    app.TodoView = Backbone.View.extend({
        tagName: 'li',
        template: _.template($('#item-template').html()), //获取模板
        events: {
            'click .destroy': 'clear',
            'dblclick label': 'edit'
        },
        initialize: function(){
            this.listenTo(this.model, 'change', this.render);
            this.listenTo(this.model, 'destroy', this.remove);
        },
        render: function(){
            this.$el.html(this.template(this.model.toJSON()));
            this.$input = this.$('.edit');
            return this;
        },
        clear: function(){
            this.model.destroy();
        },
        edit: function(){
            this.$el.addClass('editing');
            this.$input.focus();
        }
    });
})(jQuery);