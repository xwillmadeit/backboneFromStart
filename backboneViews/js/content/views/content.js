define([
    'backbone',
    'jquery',
    'doT',
    'text!content/templates/content.html',
    'detail/views/detail',
    'detail/collections/collection'
],function(Backbone,$,doT,contentTemp,DetailView,Collection){
    var ContentView = Backbone.View.extend({
        id: 'content',
        className: 'my-content',
        template: doT.template(contentTemp),
        initialize: function(){
            //内容区域需要渲染每一个商品，所以在这里遍历
            this.collection = new Collection();
            this.collection.on('sync',this.renderEach,this);
        },
        render: function(){
            this.collection.fetch();
            this.$el.html(this.template());
            return this;
        },
        renderEach: function(){
            this.collection.each(this.renderItem,this);
        },
        renderItem: function(item){
            $('.goods-list',this.$el).append(new DetailView({model: item}).render().el);
        }
    });
    return ContentView;
});