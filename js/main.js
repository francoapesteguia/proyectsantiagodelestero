const formDatos = document.querySelector("#form"),
    nameInput = document.querySelector("#name"),
    emailInput= document.querySelector("#email");

document.addEventListener("DOMContentLoaded", function(e) {

    var miForm = document.getElementById('form');
    miForm.onsubmit = function(e) {
    e.preventDefault();
    var formData = new FormData(this);
    var jsonData = {};
    for (var [k, v] of formData) {
        jsonData[k] = v;
    }

        Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: `¡Su consulta fue enviada, ${nameInput.value}!`,
        showConfirmButton: false,
        timer: 3000,
    })
    formDatos.reset()
    console.log(jsonData);
    }
    

});