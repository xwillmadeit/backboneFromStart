define([
    'jquery',
    'backbone',
    'collections/todos', //路径基于 main.js 所在位置
    'views/todos',
    'text!/templates/stats.html'
],function($,Backbone,Todos,TodoView,statsTemplate){
    var AppView = Backbone.View.extend({
        el: '.todoapp',
        // Compile our stats template
        template: _.template(statsTemplate),
        events: {
            'keypress .new-todo': 'createOnEnter'
        },
        initialize: function(){
            this.$input = this.$('.new-todo');
            this.$list = this.$('.todo-list');

            this.listenTo(Todos,'add',this.addOne);
            //this.listenTo(app.todos,'reset',this.addAll); //1

            Todos.fetch();  //2.  此处参数2同上1相同，或者不传参数，则不需要1处方法
        },
        addOne: function(todo){
            var view = new TodoView({model:todo});
            this.$list.append(view.render().el);
        },
        addAll: function(){
            Todos.each(this.addOne,this);
        },
        createOnEnter: function(e){
            if(e.which==13 && this.$input.val().trim()){
                Todos.create({title: this.$input.val()});
                this.$input.val('');
            }
        }
    });
    return AppView; //define定义需返回模块名
});