(function(){
    const view = $('#topNavBar');
    const controller = {
        view: null,
        init: function(view) {
            this.view = view; // this.view === controller.view
            this.bindEvents();
        },
        bindEvents: function() {
            const view = this.view;
            $(window).on('scroll', (event) => {
                const topOffset = $(event.currentTarget).scrollTop();
                if (topOffset > 0) {
                    this.active();
                } else {
                    this.deactive();
                }
            });
        },
        active: function() {
            this.view.addClass('sticky');
        },
        deactive: function() {
            this.view.removeClass('sticky');
        }
    }
    controller.init(view)
}).call()
