require.config({
    paths:{
        jquery: '../node_modules/jquery/dist/jquery',
        underscore: '../node_modules/underscore/underscore',
        backbone: '../node_modules/backbone/backbone',
        backboneLocalstorage: '../node_modules/backbone.localstorage/backbone.localStorage',
        text: '../node_modules/requirejs-text/text',
        doT: '../js/libs/doT',
    },
    shim: {
        underscore:{
            exports: '_'
        },
        backbone: {
            deps: [
                'jquery',
                'underscore'
            ], //依赖可以不声明
            exports: 'Backnone'
        },
        backboneLocalstorage: {
            deps: ['backbone'],
            exports: 'Store'
        }
    }
});

require([
    'backbone',
    'home/views/home'  
],function(Backbone,HomeView){

    new HomeView();

});