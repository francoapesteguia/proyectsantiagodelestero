// let lugares = "Santiago";

// function reservas(){
//     let ingresar = false;

//     for (let i = 2; i >= 0; i--){
//         let destino = prompt("Ingrese su destino: (Santiago, Termas, Completo)")
//         if(destino == lugares){
//             alert("Su destino elegido es " + destino)
//             ingresar = true
//             break
//         }
//         if(destino == "Completo"){
//             alert("Su destino elegido es " + destino)
//             ingresar = true
//             break
//         }
//         if(destino == "Termas"){
//             alert("Su destino elegido es " + destino)
//             ingresar = true
//             break}
//         else{
//             alert("No tenemos paquetes hacia ese destino. Destinos disponibles (Santiago, Termas, Completo) Oportunidades: " + i)
//         }
//     }
//     return ingresar;
// }

// let precioPorPersona5
// let precioPorPersona4
// let precioPorPersona3
// let precioPorPersona2
// let precioPorPersona
// let correcto = reservas()
// if(correcto){
//     let hotel= prompt('Estrellas del hotel a reservar: \n1 *. \n2 - **. \n3 - ***. \n4 - ****. \n5 - *****. \n6 - X para finalizar.');

//     while (hotel != "X"){
//     switch (hotel) {
//         case "1":
//             alert("Hotel seleccionado: El precio es 1650 pesos por persona")
//             let cantidadPersonas = prompt("Ingrese la cantidad de personas")
//             if (cantidadPersonas >= 4){
//                 precioPorPersona = 1650 * 0.90
//             }
//             let precioTotal = cantidadPersonas * precioPorPersona
//             alert("El total a pagar es: " + precioTotal)
//         break;
//         case "2":
//             alert("Hotel seleccionado: El precio es 2000 pesos por persona")
//             let cantidadPersonas2 = prompt("Ingrese la cantidad de personas")
//             if (cantidadPersonas2 >= 4){
//                 precioPorPersona2 = 2000 * 0.90
//             }
//             let precioTotal2 = cantidadPersonas2 * precioPorPersona2
//             alert("El total a pagar es: " + precioTotal2)
//         break;
            
//         case "3":
//             alert("Hotel seleccionado: El precio es 4050 pesos por persona")
//             let cantidadPersonas3 = prompt("Ingrese la cantidad de personas")
//             if (cantidadPersonas3 >= 4){
//                 precioPorPersona3 = 4050 * 0.90
//             }
//             let precioTotal3 = cantidadPersonas3 * precioPorPersona3
//             alert("El total a pagar es: " + precioTotal3)
//         break;
        
//         case "4":
//             alert("Hotel seleccionado: El precio es 5200 pesos por persona")
//             let cantidadPersonas4 = prompt("Ingrese la cantidad de personas")
//             if (cantidadPersonas4 >= 4){
//                 precioPorPersona4 = 5200 * 0.90
//             }
//             let precioTotal4 = cantidadPersonas4 * precioPorPersona4
//             alert("El total a pagar es: " + precioTotal4)
//         break;
            
//         case "5":
//             alert("Hotel seleccionado: El precio es 6500 pesos por persona")
//             let cantidadPersonas5 = prompt("Ingrese la cantidad de personas")
//             if (cantidadPersonas5 >= 4){
//                 precioPorPersona5 = 6500 * 0.90
//             }
//             let precioTotal5 = cantidadPersonas5 * precioPorPersona5
//             alert("El total a pagar es: " + precioTotal5)
//         break;
            
    
//         default:
//             alert("Opción no encontrada")
//         break;
//     }

//     hotel= prompt('Estrellas del hotel a reservar: \n1 *. \n2 - **. \n3 - ***. \n4 - ****. \n5 - *****. \n6 - X para finalizar.');
//     }

// }


// const formDatos = document.querySelector("#form"),
//     nameInput = document.querySelector("#name"),
//     emailInput= document.querySelector("#email");

// formDatos.addEventListener("submit", (e)=> {
//     e.preventDefault();

//     Swal.fire({
//         position: 'top-end',
//         icon: 'success',
//         title: `¡Su consulta fue enviada, ${nameInput.value}!`,
//         showConfirmButton: false,
//         timer: 3000,
//     })

//     formDatos.reset()
// })



// Formulario y más

// let $body = $('body');
var $progressBar = $('progress');
var $animContainer = $('.animation-container');
var value = 0;
var transitionEnd = 'webkitTransitionEnd transitionend';


/**
 * Resets the form back to the default state.
 * ==========================================
 */
function formReset() {
	value = 0;
	$progressBar.val(value);
	$('form input').not('button').val('').removeClass('hasInput');
	$('.js-form-step').removeClass('left leaving');
	$('.js-form-step').not('.js-form-step[data-step="1"]').addClass('hidden waiting');
	$('.js-form-step[data-step="1"]').removeClass('hidden');
	$('.form-progress-indicator').not('.one').removeClass('active');
    
	
	$animContainer.css({
		'paddingBottom': $('.js-form-step[data-step="1"]').height() + 'px'
	});
	
	console.warn('Form reset.');
	return false;
}

/**
 * Sets up the click handlers on the form. Next/reset.
 * ===================================================
 */

let form1 = document.getElementById("#form1")

function setupClickHandlers() {

	// Show next form on continue click
	form1.addEventListener('submit', (e) => {
			e.preventDefault();
			var $currentForm = $(this).parents('.js-form-step');
			showNextForm($currentForm);
	});

	// Reset form on reset button click
	$('.js-reset').on('click', function() {
		formReset();
	});
	
	return false;
}

/**
 * Shows the next form.
 * param - Node - The current form.
 * ======================================
 */
function showNextForm($currentForm) {
	var currentFormStep = parseInt($currentForm.attr('data-step')) || false;
	var $nextForm = $('.js-form-step[data-step="' + (currentFormStep + 1) + '"]');

	console.log('Current step is ' + currentFormStep);
	console.log('The next form is # ' + $nextForm.attr('data-step'));

	$body.addClass('freeze');

	// Ensure top of form is in view
	$('html, body').animate({
		scrollTop : $progressBar.offset().top
	}, 'fast');

	// Hide current form fields
	$currentForm.addClass('leaving');
	setTimeout(function() {
		$currentForm.addClass('hidden');
	}, 500);
	
	// Animate container to height of form
	$animContainer.css({
		'paddingBottom' : $nextForm.height() + 'px'
	});  

	// Show next form fields
	$nextForm.removeClass('hidden')
		.addClass('coming')
		.one(transitionEnd, function() {
		$nextForm.removeClass('coming waiting');
		});


	value += 25;

	// Reset if we've reached the end
	if (value >= 125) {
		formReset();
	} else {
		$('.form-progress')
			.find('.form-progress-indicator.active')
			.next('.form-progress-indicator')
			.addClass('active');

		// Set progress bar to the next value
		$progressBar.val(value);
	}

	// Update hidden progress descriptor (for a11y)
	$('.js-form-progress-completion').html($progressBar.val() + '% complete');

	$body.removeClass('freeze');

	return false;
}

/**
 * Sets up and handles the float labels on the inputs.
 =====================================================
 */
function setupFloatLabels() {
	// Check the inputs to see if we should keep the label floating or not
	$('form input').not('button').on('blur', function() {

		// Different validation for different inputs
		switch (this.tagName) {
			case 'SELECT':
				if (this.value > 0) {
					this.className = 'hasInput';
				} else {
					this.className = '';
				}
				break;

			case 'INPUT':
				if (this.value !== '') {
					this.className = 'hasInput';
				} else {
					this.className = '';
				}
				break;

			default:
				break;
		}
	});
	
	return false;
}

/**
 * Gets the party started.
 * =======================
 */
function init() {
	formReset();
	setupFloatLabels();
	setupClickHandlers();
}

init();