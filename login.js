const login = document.getElementById('login');

login.addEventListener('submit', async function (e) {
    e.preventDefault();
const objeto = campos(e);
console.log(objeto);

if(objeto.status ==="error"){
    return Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Por favor verifique bien los campos',
      })
}


const data = await fetchData(`${url}/login`, 'POST', objeto);
console.log(data);
if(data.status ==="Error"){
    return Swal.fire({
        icon: 'error',
        title: 'Error de Login',
        text: data.message,
      })
}

//
if(data.status ==="success"){
    e.target.reset();

    //una vez obtenido el token se guarda en localStorage para futuras peticiones
    localStorage.setItem("token",JSON.stringify(data.token));

    Swal.fire({
        icon: 'success',
        title: 'Bienvenido',
        text: 'Inicio de Sesión Exitoso',
      })

      setTimeout(()=>{
          location.href ="index.html";
      },3000);


}
})