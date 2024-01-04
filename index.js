function checkPassword() {
    let password = $('#pass').val();
    let confPassword = $('#confirm-pass').val();

    if (password !== confPassword) {
        $('#pass').addClass('invalid');
        $('#confirm-pass').addClass('invalid');
        $('.message').removeClass('msg-no-display')
        $('.message').addClass('msg-display')
        event.preventDefault();
    } else {
        $('#pass').removeClass('invalid');
        $('#confirm-pass').removeClass('invalid');
    }
}


$('button').click(function() {
    checkPassword();
});
