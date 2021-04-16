$(function () {
    sendForm();
});

function sendForm() {
    $('.form').submit(function (e) {
        if($(this).validate().errorList.length > 0){
            return false;
        }
        e.preventDefault();
        let form = $(this);
        let controls = $(this).find('input, textarea, button, select, input[type="checkbox"]');
        let data = form.serializeArray();
        let $this = $(this);
        let formText = $(this).parents('.modal___container').find('.modal-header__title').text();
        data.push({ name: 'link', 'value': document.location.href });
        data.push({ name: 'page', 'value': document.location.href });
        if(formText){
            data.push({ name: 'val', 'value': formText });
        }
        // console.log(form.serializeArray());
        controls.prop('disabled', true);
        $this.css('opacity', 0.5);
        // console.log(data);

        $.ajaxSetup({
            headers: {
                'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
            }
        });

        $.ajax({
            type: 'POST',
            url: '/handle-mail/send',
            data: data,
            success: function (response) {
                // console.log(response);
                $.magnificPopup.close();
                // $.magnificPopup.open({
                //     items: {
                //         src: '#popup__thnx'
                //     },
                //     type: 'inline',
                //     preloader: false,
                //     focus: '#username',
                //     modal: true,
                //     callbacks: {
                //         open: function open() {
                //             $('.mfp-bg').css({
                //                 background: '#e8f7ff',
                //                 opacity: '0.8'
                //             });
                //             $('.mfp-wrap').addClass('mfp-slideInUp');
                //         },
                //     },
                //     close: function close() {
                //         $('.mfp-bg').css({
                //             background: '#0b0b0b',
                //             opacity: '0.8'
                //         });
                //     }
                // });
                $this.css('opacity', 1);
                controls.prop('disabled', false);

                // ym(61583263, 'reachGoal', 'mail_submit')
                // gtag('event', 'send', {
                //     'event_category': 'mail',
                // });

                form.find("input[type=text], input[type=tel], input[type=email], textarea").val("");
            },
        })
    });
}
