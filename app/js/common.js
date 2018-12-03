$(function() {
    $('input[name="phone"]').inputmask("+7(999)999-99-99");
    //mask for text inputs
    $('input[name="name"],input[name="surname"], input[name="second_name"]').on('blur', function(){
        if ($(this).is(":invalid")) {
            $('.error-wrapper').addClass('active');
            $(this).addClass('not-valid');
        } else {
            $('.error-wrapper').removeClass('active');
            $(this).addClass('valid');
        }
    });

    //validate form
    $('.form-control').each(function() {
        var input = $(this);
        input.on('blur', function(){
            if (input.is(":invalid")&& input.val().length != 0) {
                $('.btn-submit').prop('disabled', 'disabled');  
            } else {
                $('.btn-submit').prop('disabled', false); 
            } 
        });
    });
    $('[data-fancybox]').fancybox({
        modal: false,
        smallBtn: false,
		hideScrollbar: true,
		openEffect: 'none',
		closeEffect: 'none',
	});
    $('.btn-submit').click(function() {
        var empty = $('.form-control').filter(function() {
                return this.value === "";
            });
            if(empty.length) {
                $.fancybox.open({
                    src  : '#error',
                });
                return false;
            }
    });
    $('.btn-ok').click(function(){
        $.fancybox.close();
    });
    //fullpage
    new fullpage('#fullpage', {
        //options here
        autoScrolling:true,
        scrollHorizontally: false,
        licenseKey: 'OPEN-SOURCE-GPLV3-LICENSE',
        responsiveWidth: 1200
    });
});