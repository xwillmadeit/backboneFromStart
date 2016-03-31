define([
    'backbone',
    'jquery',
    'underscore',
    'doT',
    'text!/topbar/templates/topbar.html'
],function(Backnone,$,_,doT,topbarTemplate){
    var TopbarView = Backnone.View.extend({
        tagName: 'span',
        //template: doT.template(topbarTemplate),
        template: _.template($('#topbar').html()),
        initialize: function(){
            //this.render();
        },
        render: function(){
            console.log('render topbar');
            this.$el.html(this.template());
            return this;
        }
    }); 
    return TopbarView;
});