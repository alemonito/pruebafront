const calificacion = document.getElementById('calificacion');

calificacion.addEventListener('submit', async function (e) {
    e.preventDefault();
const objeto = campos(e);
console.log(objeto);

if(objeto.status ==="error"){
    return Swal.fire({
        icon: 'error',
        title: 'No hay calificación',
        text: 'No ingreso ninguna calificación',
      })
}


const data = await fetchData("http://localhost:3000/calificacion", 'POST', objeto);
console.log(data);

if(data.status ==="success"){
    e.target.reset();
    return Swal.fire({
        icon: 'success',
        title: 'Calificaión añadida',
        text: 'La calificación ha sido añadida',
      })
}
})