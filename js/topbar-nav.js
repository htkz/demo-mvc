(function(){
    const view = $('#topNavBar nav.clearfix > li');
    const controller = {
        view: null,
        init: function(view) {
            this.view = view;
            this.bindEvents();
        },
        bindEvents: function() {
            const view = this.view;
            view.on('click', function(event) {
                const href = $(this).find('a').attr('href');
                if (href !== '#') {
                    const scrollTarget =  $(href);
                    const offsetTop = scrollTarget.offset().top - 100;
                    $('html').animate({ scrollTop: offsetTop}, 500);
                }
            });
        }
    }
    controller.init(view);
}).call()
