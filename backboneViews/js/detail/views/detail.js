define([
    'backbone',
    'jquery',
    'underscore',
    'doT',
    'text!detail/templates/detail.html'
],function(Backnone,$,_,doT,detailTemplate){
    var DetailView = Backnone.View.extend({
        tagName: 'li',
        id: 'detail',
        className: 'my-detail',
        template: doT.template(detailTemplate),
        initialize: function(){
            
        },
        render: function(){
            console.log('render detail');
            console.log(this.model);
            this.$el.html(this.template(this.model.toJSON())); 
            return this;
        }
    }); 
    return DetailView;
});