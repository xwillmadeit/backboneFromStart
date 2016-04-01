define([
    'backbone',
    'jquery',
    'underscore',
    'doT',
    'text!content/templates/content.html',
    'detail/views/detail',
    'detail/collections/collection'
],function(Backnone,$,_,doT,contentTemplate,DetailView,Collection){
    var ContentView = Backnone.View.extend({
        id: 'content',
        className: 'my-content',
        template: doT.template(contentTemplate),
        initialize: function(){
            this.collection = new Collection();
            this.collection.on('sync', this.renderEach, this);
        },
        renderEach:function(){
            $('.goods-list', this.$el).html('');
            this.collection.each(this.renderItem,this);
        },
        render: function(){
            this.collection.fetch();
            this.$el.html(this.template());
            return this;
        },
        renderItem: function(item) {
            $('.goods-list', this.$el).append(new DetailView({model:item}).render().$el);
        }
    }); 
    return ContentView;
});