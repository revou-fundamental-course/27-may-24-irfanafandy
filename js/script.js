// Ini JavaScript

function validateForm() {
    const nama = document.forms['message-form']['nama'].value

    if (nama == '') {
        document.getElementById("error-name").innerHTML = "Tidak boleh kosong!"

        return false
    }

    document.getElementById("form-rint").innerHTML = form-print;
    document.getElementById("error-name").innerHTML = "";

        return false;
}