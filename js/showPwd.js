(function () {
    let password = document.getElementById('pwd');
    let showPwd = document.getElementById('showPassword');

    showPwd.addEventListener('change', function (e) {
        let target = e.target || e.srcElement;
        try {
            if (target.checked) {
                password.type = 'text';
            } else {
                password.type = 'password';
            }
        } catch (error) {
            alert('This browser can\' switch type');
        }
    }, false)
}());