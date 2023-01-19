const formDatos = document.querySelector("#form"),
    nameInput = document.querySelector("#name"),
    emailInput= document.querySelector("#email");

formDatos.addEventListener("submit", (e)=> {
    e.preventDefault();

    Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: `¡Su consulta fue enviada, ${nameInput.value}!`,
        showConfirmButton: false,
        timer: 3000,
    })

    formDatos.reset()
})