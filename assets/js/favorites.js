$(function () {

    paginationClick();
    updateCurrency();
    sortUpdate();
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
    let url = document.location.href.split('?')[0];
    let sort = $('.sort-select').val();

    
    $('.preloader-main').css('display', 'block');

    url = setQueryParameters(url, 'sort', sort)
    url = setQueryParameters(url, 'page', page)

    return document.location.href = url;
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
