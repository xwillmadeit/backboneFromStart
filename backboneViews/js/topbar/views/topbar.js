define([
    'backbone',
    'jquery',
    'underscore',
    'doT',
    'text!topbar/templates/topbar.html'
],function(Backnone,$,_,doT,topbarTemplate){
    var TopbarView = Backnone.View.extend({
        id: 'topbar',
        className: 'my-topbar',
        template: doT.template(topbarTemplate),
        initialize: function(){

        },
        render: function(){
            console.log(this.model.toJSON()); // this.model 的值由 new TopbarView 时传入
            this.$el.html(this.template(this.model.toJSON())); //this.$el 由 tagName (默认div)，id，className 组成
            return this;
        }
    }); 
    return TopbarView;
});