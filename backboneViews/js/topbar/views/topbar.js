define([
    'backbone',
    'jquery',
    'doT',
    'text!topbar/templates/topbar.html'
],function(Backbone,$,doT,topbarTemp){
    var TopbarView = Backbone.View.extend({
        id: 'topbar',
        className: 'my-topbar',
        template: doT.template(topbarTemp),
        render: function(){
            this.$el.html(this.template());
            return this;
        }
    });
    return TopbarView;
});