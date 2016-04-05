define([
    'backbone',
    'jquery',
    'doT',
    'text!footbar/templates/footer.html'
],function(Backbone,$,doT,footerTemp){
    var FooterView = Backbone.View.extend({
        id: 'footerBar',
        className: 'my-footer',
        template: doT.template(footerTemp),
        render: function(){
            this.$el.html(this.template());
            return this;
        }
    });
    return FooterView;
});