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
        events: {
            'click .cal': 'calcu',
            'click .cal': 'calcu'
        },
        calcu: function(e){
            var calType = $(e.currentTarget).data('type'),
                val = parseInt($('.total').val());

            if(calType === 'plus'){
                $('.total').val(val+1);
            }else{
                if(val>0){
                    $('.total').val(val-1);
                }else if(val==0){
                    $('.minus').prop('disabled', true);
                }
            }
        },
        initialize: function(){
            //内容区域需要渲染每一个商品，所以在这里遍历
            console.log('content initial');
            this.collection = new Collection();
            this.collection.on('sync',this.renderEach,this);
            console.log('last line of initialize');
        },
        render: function(){
            console.log('被上级render');
            this.collection.fetch();
            this.$el.html(this.template());
            console.log('last line of render');
            return this;
        },
        renderEach: function(){
            console.log('渲染每一个子内容块');
            this.collection.each(this.renderItem,this);
        },
        renderItem: function(item){
            $('.goods-list',this.$el).append(new DetailView({model: item}).render().el);
        }
    });
    return ContentView;
});