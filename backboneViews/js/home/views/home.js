define([
    'backbone',
    'jquery',
    'topbar/views/topbar',
    'content/views/content',
    'footbar/views/footer',
    'songs/models/main'
],function(Backnone,$,TopbarView,ContentView,FooterView,Song){
    var HomeView = Backnone.View.extend({
        initialize: function(){
            this.render();
        },
        render: function(){
            //渲染头
            var song = new Song({title: 'eminem'});
            $('.container').append(new TopbarView({model: song}).render().$el);

            $('.container').append(new ContentView().render().$el);

            //渲染尾
            $('.container').append(new FooterView().render().$el);
        }
    });
    return HomeView;
});