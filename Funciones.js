const campos = (e) => {
    const index = e.target.length - 1;
    let llaves = [];
    let valores = [];

    for (let i = 0; i < index; i++) {
        if (e.target[i].id) {
            llaves.push(e.target[i].id);
        } else {
            llaves.push(e.target[i].name);
        }
        valores.push(e.target[i].value.trim());
    }
    let campo = valores.includes("");

    if (campo) {
        return (campo = {
            status: "error",
            message: "uno o mas campos estan vacios",
        });
    }
    let objeto = {
        ...valores,
    };
    for (let val in objeto) {
        objeto[`${llaves[val]}`] = valores[val];
        delete objeto[val];
    }
    return objeto;
};

//peticiones sin envio de token
const fetchData = async (url, verbo = "GET",datos) => {
    let res;

    // let data;
    if (
        verbo.toUpperCase() === "GET" ||
        verbo.toUpperCase() === "DELETE" ||
        verbo.toUpperCase() === "PUT"
    ) {
        res = await fetch(url, {
            method: verbo.toUpperCase(),
         
        });
    } else  {
        res = await fetch(url, {
            method: verbo.toUpperCase(),
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(datos),
        });
    }

    const data = await res.json();
    return data;
};

//peticiones http con envio de token
const fetchDataToken = async (url, verbo = "GET",token="",datos) => {
    let res;

    // let data;
    if (
        verbo.toUpperCase() === "GET" ||
        verbo.toUpperCase() === "DELETE" ||
        verbo.toUpperCase() === "PUT" 
    ) {
        res = await fetch(url, {
            method: verbo.toUpperCase(),
            headers:{
                "authorization":`Bearer ${token}`
            }
         
        });
    } else{
        res = await fetch(url, {
            method: verbo.toUpperCase(),
            headers: {
                "authorization":`Bearer ${token}`,
                "Content-Type": "application/json",
            },
            body: JSON.stringify(datos),
        });
    }

    const data = await res.json();
    return data;
};

const url = "https://rocky-ridge-03963.herokuapp.com";
