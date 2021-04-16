$(function () {
    buttonStatus();
    selectUpdate();
    paginationClick();
    updateCurrency();
    sortUpdate();
    formSubmit();
});

function updateCurrency() {
    $(document).on('select2:select', '.js-prod-curr', function (e) {
        Cookies.set('currency', e.params.data.text);
        generateUrl();
    });
}

function sortUpdate() {
    $('.sort-select').on("select2:select", function () {
        generateUrl();
    });
}

function selectUpdate() {

    $('.js-filter-select-custom').on("select2:select", function () {
        generateUrl();
    });

}

function formSubmit() {
    $('.filter-form').submit(function (e) {
        e.preventDefault();
        generateUrl();
    });
}

function buttonStatus() {

    $('.filter__categorie-item').click(function (e) {
        generateUrl();
    });

}

function paginationClick() {
    $(document).on('click', '.pagination__item a', function (e) {
        e.preventDefault();
        // $('html,body').animate({
        //     scrollTop: $(".catalog__header").offset().top
        // }, 'slow');
        var page = $(this).attr('href').split('page=')[1];
        generateUrl(page);
    });
}

function generateUrl(page = null) {
    let url = $(document).find('.filter-form').attr('action');
    let price_from = $('#filter-form__price-from').val();
    let price_to = $('#filter-form__price-to').val();
    let product_id = $('#filter-form__ID').val();
    let sort = $('.sort-select').val();

    $('.preloader-main').css('display', 'block');

    let select = $('.js-filter-select-custom').trigger('change');

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
    url = setQueryParameters(url, 'product_id', product_id.replace(' ', ''))
    url = setQueryParameters(url, 'sort', sort)
    url = setQueryParameters(url, 'page', page)

    ajaxQuery(url);
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


function ajaxQuery(url) {

    $.ajax({
        type: "GET",
        url: url,
        datatype: "html",
        cache: false,
        success: function (response) {
            history.pushState('', '', url);
            successQuery(response);

        }
    });

}

function successQuery(response) {
    $('.prod-grid__items').empty().html(response.properties_view);
    $('.pagination-block').empty().html(response.pagination_view);
    $('.total-items__count').empty().html(response.property_count);
    $('.breadcrumbs_catalog_block').html(response.breadcrumbs);
    // seo
    $('.catalog__heading-title').html(response.catalog_seo.header);
    $(document).prop('title', response.catalog_seo.title);
    $("meta[name='description']").attr('content', response.catalog_seo.description);
    $("meta[name='keywords']").attr('content', response.catalog_seo.keywords);
    // endseo
    productCurrencyDropdown();
    $('.preloader-main').css('display', 'none');
}