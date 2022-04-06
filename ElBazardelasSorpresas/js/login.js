const form = document.getElementById('loginForm');

function onSubmit(event) {
    console.log(event)
    event.preventDefault();
    //VAlidaciones
    const passField = document.getElementById("pass");

    if (passField.value == "") {
        alert("agregue contra")
    }

}

// form.addEventListener('submit',onSubmit)
// form.addEventListener('click',onSubmit)