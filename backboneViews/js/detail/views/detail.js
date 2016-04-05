define([
    'backbone',
    'jquery',
    'doT',
    'text!detail/templates/detail.html'
],function(Backbone,$,doT,detailTemp){
    var DetailView = Backbone.View.extend({
        tagName: 'li',
        className: 'good-detail',
        template: doT.template(detailTemp),
        initialize: function(){
            
        },
        render: function(){
            console.log('render goods');
            this.$el.html(this.template(this.model.toJSON()));
            return this;
        }
    });
    return DetailView;
});