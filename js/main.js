// ==== FOCUS ====
const inputs = document.querySelectorAll(".form__input");

// ==== Add focus ====
function addFocus() {
    let parent = this.parentNode.parentNode
    parent.classList.add('focus')
}

// ==== Remove focus ====
function remFocus() {
    let parent = this.parentNode.parentNode

    if (this.value == '') {
        parent.classList.remove('focus')
    }
}

// ==== To call function ====
inputs.forEach(input => {
    input.addEventListener('focus', addFocus)
    input.addEventListener('blur', remFocus)
})

//   ==== ShowPassword ====
(function() {
    let pwd = document.getElementById('pwd');
    let showPwd = document.getElementById('showPwd');

    addEvent(showPwd, 'change', function(e) {
        let target = e.target || e.srcElement;
        try {
            if (target.checked) {
                pwd.type = 'text';
            } else {
                pwd.type = 'password'
            }
        } catch (error) {
            alert('This browser can\'t switch type');
        }
    })
}());