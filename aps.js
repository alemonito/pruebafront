const myForm = document.getElementById('myForm');

myForm.addEventListener('submit', async function (e) {
    e.preventDefault();
const objeto = campos(e);
console.log(objeto);

if(objeto.status ==="error"){
    return Swal.fire({
        icon: 'error',
        title: 'Campos vacios',
        text: 'Uno o dos campos estan vacios',
      })
}


const data = await fetchData("http://localhost:3000/usuario", 'POST', objeto);
console.log(data);

if(data.status ==="success"){
    e.target.reset();
    return Swal.fire({
        icon: 'success',
        title: 'Alumno añadido',
        text: 'El alumno se ha creado',
      })
}
})