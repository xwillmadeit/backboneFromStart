define([
    'backbone',
    'jquery',
    'topbar/views/topbar',
    'footbar/views/footer',
],function(Backnone,$,TopbarView,FooterView){
    var HomeView = Backnone.View.extend({
        initialize: function(){
            this.render();
        },
        render: function(){
            //渲染头
            $('.container').append(new TopbarView().render().$el);
            //渲染尾
            $('.container').append(new FooterView().render().$el);
        }
    });
    return HomeView;
});