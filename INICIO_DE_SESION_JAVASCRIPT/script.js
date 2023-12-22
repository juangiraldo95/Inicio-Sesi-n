function iniciarSesion(){
    persons = [
        {
           nombre :"andres",
           correo : "andres@gmail.com",
           password : "1234",
       },
      {
           nombre :"juan",
           correo : "juan@gmail.com",
           password : "6789",
       }
       ,
       {
           nombre :"felipe",
           correo : "felipe@gmail.com",
           password : "1111",
       }
    ]

    let correo = document.getElementById('correo').value;
    let password = document.getElementById('password').value;

    persons.forEach(function(person){            
        if(correo == person.correo && password == person.password){
           sessionStorage.setItem('nombre', person.nombre);
           sessionStorage.setItem('auth',"si");
           location.href = "home.html";
        } else {
            document.getElementById("incorrecta").innerHTML = "Los datos no coinciden"
        }
    });
}

function validarFormulario(){
    var correo = document.getElementById('correo').value;
    var password = document.getElementById('password').value;

    var inicioSesion = document.getElementById('inicioSesion');

    if(correo.trim() !== '' && password.trim() !== ''){
        inicioSesion.disabled = false;
    } else {
        inicioSesion.disabled = true;
    }
}
