const keso = document.getElementById('koso');
const form = document.getElementById('form');

keso.addEventListener('click', function () {
    fetch("http://localhost:3000/materia").then((res) => {
        return res.json() //CON LOS PARENTESIS LLAMAS PENDEJAA! ACUERDATE! NO WA EJERCER  
    }).then((data) => {
        console.log(data);
    })
})

form.addEventListener('submit', function (e) {
    e.preventDefault() 
    const materia = e.target.materia.value;
    console.log(materia);

    const option = {
        method:'POST', 
        body:JSON.stringify({materia}), 
        headers:{
            'content-type':'application/JSON'
        }
    }

    fetch("http://localhost:3000/materia", option).then((res) => {
        return res.json() //CON LOS PARENTESIS LLAMAS PENDEJAA! ACUERDATE! NO WA EJERCER  
    }).then((data) => {
        console.log(data);
    })

})

