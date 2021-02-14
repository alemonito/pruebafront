const calificacion = document.getElementById('calificacion');
const obtenerCalificaciones = document.getElementById('getCalificaciones');
const obtenerCuatrimestre = document.getElementById('cuatrimestre');
const obtenerMaestro = document.getElementById('maestro');
const obtenerAlumno = document.getElementById('estudiantes');
const obtenerMateria = document.getElementById('materia');

if(calificacion){
    calificacion.addEventListener('submit', async function (e) {
        e.preventDefault();
    const objeto = campos(e);
    console.log(objeto);

    const token = JSON.parse(localStorage.getItem("token")) || ""; 
    
    //si el token no existe en local storage sera redireccionado al login pa que obtenga su token
if(!token){
    location.href = "login.html";
}
        console.log(objeto);
    if(objeto.status ==="error"){
        return Swal.fire({
            icon: 'error',
            title: 'No hay calificación',
            text: 'No ingreso ninguna calificación',
          })
    }
    
    
    const data = await fetchDataToken(`${url}/calificacion`, 'POST',token, objeto);
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

        console.log(data);
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

async function obtenerMaterias() {
    //verificamos que el token exista en localSotorage
const token = JSON.parse(localStorage.getItem("token")) || ""; 

    //si el token no existe en local storage sera redireccionado al login pa que obtenga su token
if(!token){
    location.href = "login.html";
}else{
    if(obtenerMateria){
        //una vez obtenido y verificado la existencia del token debe viajar en cada una de las peticiones HTTP 

    //peticion para obtener todos los cuatrimestres
     const data1 = await fetchDataToken(`${url}/materia`,"GET",token);

    console.log(data1);
        //impresion de  todos los cuatrimestres 
        data1.materia.forEach((materia)=>{
            const option = document.createElement("option");
            option.value += materia._id;
            option.textContent += materia.materia;
            obtenerMateria.appendChild(option);
        })
    }

}
}
obtenerMaterias();


async function obtenerMaestros() {
    //verificamos que el token exista en localSotorage
const token = JSON.parse(localStorage.getItem("token")) || ""; 

    //si el token no existe en local storage sera redireccionado al login pa que obtenga su token
if(!token){
    location.href = "login.html";
}else{
    if(obtenerMaestro){
        //una vez obtenido y verificado la existencia del token debe viajar en cada una de las peticiones HTTP 

    //peticion para obtener todos los maistros
     const data2 = await fetchDataToken(`${url}/maestro`,"GET",token);


    console.log(data2);
        //impresion de  todos los cuatrimestres 
            data2.maestro.forEach((maestro)=>{
            const option = document.createElement("option");
            option.value += maestro._id;
            option.textContent += `${maestro.nombre} ${maestro.apellido_p} ${maestro.apellido_m}`;
            obtenerMaestro.appendChild(option);
        })
    }

}
}
obtenerMaestros();

async function obtenerAlumnos() {
    //verificamos que el token exista en localSotorage
const token = JSON.parse(localStorage.getItem("token")) || ""; 

    //si el token no existe en local storage sera redireccionado al login pa que obtenga su token
if(!token){
    location.href = "login.html";
}else{
    if(obtenerAlumno){
        //una vez obtenido y verificado la existencia del token debe viajar en cada una de las peticiones HTTP 

    //peticion para obtener todos los maistros
     const data3 = await fetchDataToken(`${url}/usuario`,"GET",token);
            
     console.log(data3);
        //impresion de  todos los cuatrimestres 
            data3.usuario.forEach((alumno)=>{
                obtenerAlumno.innerHTML += `
                <tr>
                <td>
                ${alumno.nombre}  ${alumno.apellido_p}  ${alumno.apellido_m} 
                </td>
                <td>
                <a class="calificacion_id" data-id= "${alumno._id}" href="#"> asignar calificacion </a>
                </td>
                </tr>`
                ;
            
        })
        const listadoID=document.querySelectorAll(".calificacion_id")
        console.log(listadoID);
        
        listadoID.forEach(enlace=>enlace.addEventListener("click", function (e) {
            e.preventDefault();
            const idalumno = e.target.dataset.id
            const alumno = document.getElementById("alumno");
            alumno.setAttribute("value", idalumno);
        }))
    }

}
}
obtenerAlumnos();
