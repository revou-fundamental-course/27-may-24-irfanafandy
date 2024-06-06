// Ini JavaScript


function validateForm() {
    const name = document.forms['message-form']['full-name'].value
    const birthDate = document.forms['message-form']['birth-date'].value
    const gender = document.forms['message-form']['gender'].value
    const message = document.forms['message-form']['message'].value
    

    if (name == "" || birthDate== "" || gender == "" || message == "") {
        
        document.getElementById("error-name").innerHTML = "Tidak boleh kosong!"

            return false
    }

    //setSenderUI(name, birthDate, gender, message);
        setName(name, name, birthDate, gender, message);

            return false;
}

function setName(name, name, birthDate, gender, message) {
    document.getElementById("sender-name").innerHTML = name;
    document.getElementById("sender-hai").innerHTML = name;
    document.getElementById("sender-birth").innerHTML = birthDate;
    document.getElementById("sender-gender").innerHTML = gender;
    document.getElementById("sender-message").innerHTML = message;
    document.getElementById("error-name").innerHTML = "";
}