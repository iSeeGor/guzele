$(function(){
    priceSelectChange();
});

function priceSelectChange(){
    $(document).on('select2:select', '.js-prod-curr', function (e) {
        Cookies.set('currency', e.params.data.text);

        let currency = e.params.data.text;
        
        $('.js-prod-curr').val(currency).trigger('change');

        let property = $('.b-price__currency .js-prod-curr').find(':selected')[0];
        let discount_price = property.dataset.calculated;
        let price = property.dataset.price;
        if (discount_price != price) {
            $('.b-price_sale .b-price__value').html('<s>'+price+'</s> '+currency);
        }
        $('.current-price span').not('.pref').html(discount_price);

        
        let cards = $('.product-card');
        for(let i = 0; i < cards.length; i++){
            let price = $(cards[i]).find('.js-prod-curr').find(':selected')[0].dataset.price;
            $(cards[i]).find('.product-card__price').html(price);            
        }
        
    });
}