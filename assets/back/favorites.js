$(function(){
    $(document).on('click', '.js-wishlist-btn, .js-meta-btn', function(e){
        e.preventDefault();
        
        let cookie = Cookies.getJSON('favorites');
        if (!cookie) {
            cookie = [];
        }

        let id = $(this).attr('data-id');
        
        let find = cookie.find(function (e) {
            return e === id;
        })
        
        if (!find) {
            cookie.push(id);
            // $(this).addClass('to-favorit__button_active');
        } else {
            cookie = $.grep(cookie, function (value) {
                return value != id;
            });
            // $(this).removeClass('to-favorit__button_active');
        }

        cookie = $.grep(cookie, function (value) {
            return value != null;
        });
        
        


        Cookies.set('favorites', cookie, { expires: 365, path: '/' });
        $('.to-favorits__count').html(cookie.length);
        $('.catalog__wishlist-num').html(cookie.length);
    })
})