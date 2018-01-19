(function(){
    const view = $('.topNavBar nav li a');
    const controller = {
        view: null,
        init: function(view) {
            this.view = view;
            this.bindEvents();
        },
        bindEvents: function() {
            const view = this.view;
            $(window).on('scroll', (event) => {
                let curMinOffset = 100000;
                let curHightlightnItem;
                $('div[data-highlight]').each(function(index, el) {
                    let scrollY = window.scrollY;
                    let offset = Math.abs(scrollY - $(el).offset().top);
                    // add animation to scroll up when first appear
                    if (offset < 800) {
                        $(el).removeClass('slideAppear')
                    }
                    if (offset < curMinOffset) {
                        curMinOffset = offset;
                        curHightlightnItem = el;
                    }
                });
                this.view.each(function(index, el) {
                    $(el).removeClass('curView');
                });
                const id = $(curHightlightnItem).attr('id');
                $(`a[href="#${id}"]`).addClass('curView');
            });
        }
    }
    controller.init(view);
}).call()
