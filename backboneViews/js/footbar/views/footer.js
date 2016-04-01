define([
    'backbone',
    'jquery',
    'underscore',
    'doT',
    'text!footbar/templates/footer.html'
],function(Backnone,$,_,doT,footerTemplate){
    var FooterView = Backnone.View.extend({
        id: 'footer',
        className: 'my-footer',
        template: doT.template(footerTemplate),
        initialize: function(){
            
        },
        render: function(){
            this.$el.html(this.template()); //浏览器文件被拦截
            return this;
        }
    }); 
    return FooterView;
});