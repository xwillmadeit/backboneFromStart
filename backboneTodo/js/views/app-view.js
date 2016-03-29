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
            
            //监听 app.todos 
            this.listenTo(app.todos,'add',this.addOne);
            this.listenTo(app.todos, 'reset', this.addAll);
            //this.listenTo(app.todos, 'all', _.debounce(this.render, 0));

            app.todos.fetch({reset: true});  //获取 local 中的数据
        },
        render: function(){

        },
        addOne: function(todo){
            //更新界面
            var view = new app.TodoView({model: todo});
            this.$list.append(view.render().el);
        },
        // Add all items in the **Todos** collection at once.
        addAll: function () {
            this.$list.html('');
            app.todos.each(this.addOne, this);
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