define([
    'backbone',
    'jquery',
    'topbar/views/topbar',
    'content/views/content',
    'footbar/views/footer'
],function(Backbone,$,TopbarView,ContentView,FooterView){
    var HomeView = Backbone.View.extend({
        initialize: function(){
            console.log('initial');
            this.render();
        },
        render: function(){
            $('.container').append(new TopbarView().render().el);
            $('.container').append(new ContentView().render().el);
            $('.container').append(new FooterView().render().el);
        }
    });
    return HomeView;   
});