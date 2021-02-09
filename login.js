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


const data = await fetchData("https://rocky-ridge-03963.herokuapp.com/login", 'POST', objeto);
console.log(data);

if(data.status ==="success"){
    e.target.reset();
    return Swal.fire({
        icon: 'success',
        title: 'Bienvenido',
        text: 'Inicio de Sesión Exitoso',
      })
}
})