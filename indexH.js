const axios = require("axios")
const gitGubApi = cep => `https://viacep.com.br//ws/${cep}/json/`
const ceps = [73010625, 73010625, 73010625]

async function foo() {
    console.time();
    const p1 = axios.get(gitGubApi(73010625)); // Independente
    const p2 = axios.get(gitGubApi(73010625)); // Independente
    const p3 = axios.get(gitGubApi(73010625)); // Independente
    const rs = await Promise.all([p1, p2, p3]); // Paralelo
    console.timeEnd();

    console.log(rs[0].status)
    console.log(rs[1].status)
    console.log(rs[2].status)
}

async function foo2() {
    // Paralelo
    ceps.forEach(async cep => {
        const res = await axios.get(gitGubApi(cep)); // Independente
        console.log(res.status)
    })
    // Código Independente do código de cima
}

//foo();

foo2();


