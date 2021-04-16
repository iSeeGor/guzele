$(function () {
    changeCurrency();
    submitFilter();
})

function changeCurrency() {
    $(document).on('select2:select', '.js-prod-curr', function (e) {
        Cookies.set('currency', e.params.data.text);

        let currency = e.params.data.text;

        $('.js-prod-curr').val(currency).trigger('change');

        let cards = $('.product-card');
        for (let i = 0; i < cards.length; i++) {
            let price = $(cards[i]).find('.js-prod-curr').find(':selected')[0].dataset.price;
            $(cards[i]).find('.product-card__price').html(price);
        }

    });
}

function submitFilter() {
    $('.filter-form').submit(function ($e) {
        $e.preventDefault();
        let url = $(document).find('.filter-form').attr('action');
        let price_from = $('#filter-form__price-from').val();
        let price_to = $('#filter-form__price-to').val();
        let property_id = $('#filter-form__ID').val();
        let sort = $('.sort-select').val();

        $('.preloader-main').css('display', 'block');

        let select = $('.js-filter-select').trigger('change');

        let status = $('.filter__categorie-item.active').attr('data-status');
        let i = 0;
        let pathname = '/';

        if (status) {
            pathname += 'status=' + status;
            i++;
        }

        select.each(function (e) {
            let item = $(select[e]);

            if (item.val()) {

                if (i > 0) {
                    pathname += '_' + item.attr('name') + '=' + item.val();
                }
                else {
                    pathname += item.attr('name') + '=' + item.val();
                }

                i++;
            }
        });

        url += pathname;       

        url = setQueryParameters(url, 'price_from', price_from.replace(' ', ''))
        url = setQueryParameters(url, 'price_to', price_to.replace(' ', ''))
        url = setQueryParameters(url, 'property_id', property_id.replace(' ', ''))
        url = setQueryParameters(url, 'sort', sort)

        document.location.href = url;
    })
}

function setQueryParameters(link, key, value) {
    var url = new URL(link);
    if (value != '' && value != undefined) {
        if (url.searchParams.has(key)) {
            url.searchParams.set(key, value);
        }
        else {
            url.searchParams.append(key, value);
        }
    }
    return url;
}