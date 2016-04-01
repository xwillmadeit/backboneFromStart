define(['jquery', 'backbone'],
    function($, Backbone) {
        var Router = Backbone.Router.extend({
            initialize: function() {
                console.log(111);
                $(document).on('click', 'a[href^="/"],a[href^="' + window.location.origin + '"]', function(e) {
                    event.preventDefault();
                    var href = $(e.currentTarget).attr('href'),
                        go;
                    if (href.indexOf(window.location.origin) >= 0) {
                        go = href.replace(window.location.origin, '');
                    } else {
                        go = href;
                    }

                    if (href != '/' && href != _global.url.shop_url && document.body.scrollTop > 0) {
                        history.replaceState({
                            home: 'home'
                        }, 'home', window.location.origin + window.location.pathname + '?st=' + document.body.scrollTop);
                    }

                    Backbone.history.navigate(go, true);
                    return false
                });

                window.openCart = function(id) {
                    var cartView = new CartView();
                    cartView.open('', id);
                }
            },
            routes: {
                '': 'home',
                'main': 'main'
            },
            home: function() {
                require(['apps/home/app'], function(router) {
                    router.main();
                });
            },
            main: function() {
                console.log(111);
                require(['apps/home/app'], function(router) {
                    router.main();
                });
            }
        });

        new Router();
        Backbone.history.start({
            pushState: true
        });
    }
);