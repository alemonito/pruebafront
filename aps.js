const myForm = document.getElementById('myForm');


myForm.addEventListener('submit', async function (e) {
    e.preventDefault();
const objeto = campos(e);
console.log(objeto);
const data = await fetchData("http://localhost:3000/maestro", 'POST', objeto);
console.log(data);
})