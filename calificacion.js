const calificacion = document.getElementById('calificacion');
const obtenerCalificaciones = document.getElementById('getCalificaciones');
const obtenerCuatrimestre = document.getElementById('cuatrimestre');

if(calificacion){
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
}


if(obtenerCalificaciones){
    obtenerCalificaciones.addEventListener("click",async(e)=>{
        e.preventDefault();
        
        //verificamos que el token exista en localSotorage
        const token = JSON.parse(localStorage.getItem("token")) || ""; 

        //si el token no existe en local storage sera redireccionado al login pa que obtenga su token
        if(!token){
            location.href = "/login.html";
        }else{
            //una vez obtenido y verificado la existencia del token debe viajar en cada una de las peticiones HTTP 
            const data = await fetchDataToken(`${url}/calificacion`,"GET",token);
            console.log(data);
        
        }
        
        })
}

async function obtenerCuatrimestres() {
        //verificamos que el token exista en localSotorage
    const token = JSON.parse(localStorage.getItem("token")) || ""; 
    
        //si el token no existe en local storage sera redireccionado al login pa que obtenga su token
    if(!token){
        location.href = "login.html";
    }else{
        if(obtenerCuatrimestre){
            //una vez obtenido y verificado la existencia del token debe viajar en cada una de las peticiones HTTP 

        //peticion para obtener todos los cuatrimestres
         const data = await fetchDataToken(`${url}/cuatrimestre`,"GET",token);

        //peticion para obtener todos los maistros
         const data2 = await fetchDataToken(`${url}/maestro`,"GET",token);



        console.log(data);
        console.log(data2);
            //impresion de  todos los cuatrimestres 
            data.cuatrimestre.forEach((cuatrimestre)=>{
                const option = document.createElement("option");
                option.value += cuatrimestre._id;
                option.textContent += cuatrimestre.cuatrimestre;
                obtenerCuatrimestre.appendChild(option);
            })
        }
   
    }
}

obtenerCuatrimestres();