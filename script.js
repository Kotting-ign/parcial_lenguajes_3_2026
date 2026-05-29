// EJERCICIO 1: Validaciones Individuales
function validarNombre() {
    const nombre = document.getElementById('nombre').value; 
    const errorNombre = document.getElementById('errorNombre');
    
    // Solo letras y espacios. Mínimo 3 caracteres.
    const regexLetras = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/;

    if (nombre.trim().length < 3 || !regexLetras.test(nombre)) { 
        errorNombre.innerHTML = "El nombre debe tener al menos 3 caracteres y contener solo letras."; 
        return false; 
    }
    
    errorNombre.innerHTML = ""; 
    return true; 
}

function validarDNI() {
    const dni = document.getElementById('dni').value;
    const errorDNI = document.getElementById('errorDNI');

    // Longitud exacta de 8 y solo números.
    if (dni.length !== 8 || isNaN(dni) || dni.includes(" ")) {
        errorDNI.innerHTML = "El DNI debe contener exactamente 8 números.";
        return false;
    }
    
    errorDNI.innerHTML = "";
    return true;
}

function validarFecha() {
    const fechaInput = document.getElementById('fechaNacimiento').value;
    const errorFecha = document.getElementById('errorFecha');

    if (!fechaInput) {
        errorFecha.innerHTML = "Por favor, ingrese su fecha de nacimiento.";
        return false;
    }

    const fechaNacimiento = new Date(fechaInput);
    const fechaActual = new Date();
    
    let edad = fechaActual.getFullYear() - fechaNacimiento.getFullYear();
    const diferenciaMeses = fechaActual.getMonth() - fechaNacimiento.getMonth();

    if (diferenciaMeses < 0 || (diferenciaMeses === 0 && fechaActual.getDate() < fechaNacimiento.getDate())) {
        edad--;
    }

    // Mayor de 18 años.
    if (edad < 18) {
        errorFecha.innerHTML = "Debe ser mayor de 18 años para inscribirse.";
        return false;
    }

    errorFecha.innerHTML = "";
    return true;
}

function validarFormulario() {
    const nombreValido = validarNombre();
    const dniValido = validarDNI();
    const fechaValida = validarFecha();
    
    const mensajeExito = document.getElementById('mensajeExito');

    if (nombreValido && dniValido && fechaValida) {
        mensajeExito.innerHTML = "¡Todos los datos son válidos! Inscripción exitosa.";
    } else {
        mensajeExito.innerHTML = "";
    }
}
// EJERCICIO 2: Botón de Preguntas Progresivas
function hacerPreguntas() {
    let nacionalidad = prompt("¿Cuál es tu nacionalidad?");
    if (nacionalidad === null || nacionalidad.trim() === "") {
        nacionalidad = "No respondió"; 
    }

    let nivel = prompt("¿Cuál es tu nivel de conocimiento en programación? (Básico / Intermedio / Avanzado)");
    if (nivel === null || nivel.trim() === "") {
        nivel = "No respondió"; 
    }

    let motivo = prompt("¿Por qué elegiste esta carrera?");
    if (motivo === null || motivo.trim() === "") {
        motivo = "No respondió"; 
    }

    const contenedor = document.getElementById('contenedorRespuestas');
    
    contenedor.innerHTML = `
        <h3>Respuestas del usuario:</h3>
        <p><strong>Pregunta 1:</strong> ${nacionalidad}</p>
        <p><strong>Pregunta 2:</strong> ${nivel}</p>
        <p><strong>Pregunta 3:</strong> ${motivo}</p>
    `;
    contenedor.style.display = "block";
}