var app = app || {};

(function($){
    app.AppView = Backbone.View.extend({
        el: '.todoapp',
        events: {
            'keypress .new-todo': 'createOnEnter'
        },
        initialize: function(){
            //绑定 dom
            this.$input = this.$('.new-todo');
            this.$list = this.$('.todo-list');
            
            this.listenTo(app.todos,'add',this.addOne);
        },
        render: function(){

        },
        addOne: function(todo){
            var view = new app.TodoView({model: todo});
            this.$list.append(view.render().el);
        },
        newAttributes: function(){
            return {
                title: this.$input.val()
            }
        },
        createOnEnter: function (e) {
            if (e.which === ENTER_KEY && this.$input.val().trim()) {
                app.todos.create(this.newAttributes());
                this.$input.val('');
            }
        },
    });
})(jQuery);