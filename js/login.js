async function validation() {

    const file = await fetch('../data/data.json');
    const json = await file.json();
    const dados = json.dados;
    console.table(dados);

    function login(e) {
        let newEmail = conta.value;
        let newPassword = password.value;
        let isFormValid;

        for (let i in dados) {
            let email = dados[i].email;
            let password = dados[i].password;

            if (newEmail !== email || newPassword !== password) {
                isFormValid = false;
            } else {
                isFormValid = true;
                break
            }
        }
        
        if (!isFormValid) {
            e.preventDefault();
            document.getElementById('warning').textContent = `Email ou Senha Inválidos!`
            document.getElementById('warning').style.display = "block"
        }


    }

    let conta = document.getElementById('email');
    let password = document.getElementById('pwd');
    let submit = document.getElementById('login');

    submit.addEventListener('click', login, false);

}

validation();