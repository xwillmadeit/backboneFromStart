define([
    'backbone',
    'jquery',
    'underscore',
    'doT',
    'text!topbar/templates/topbar.html'
],function(Backnone,$,_,doT,topbarTemplate){
    var TopbarView = Backnone.View.extend({
        template: doT.template(topbarTemplate),
        initialize: function(){
            
        },
        render: function(){
            console.log('render topbar');
            this.$el.html(this.template());
            return this;
        }
    }); 
    return TopbarView;
});