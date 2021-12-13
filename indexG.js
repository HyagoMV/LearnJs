const axios = require("axios")
const gitGubApi = cep => `https://viacep.com.br//ws/${cep}/json/`
const ceps = [73010625, 73010625, 73010625]

async function foo() {
    console.time();
    const r1 = await axios.get(gitGubApi(73010625)); // Dependente
    const r2 = await axios.get(gitGubApi(73010625)); // Dependente
    const r3 = await axios.get(gitGubApi(73010625)); // Dependente
    console.timeEnd();

    console.log(r1.status)
    console.log(r2.status)
    console.log(r3.status)
}

async function foo2() {
    console.time();
    for (const cep of ceps) {
        const rep = await axios.get(gitGubApi(cep)); // Dependente
        console.log(rep.status)
    }
    console.timeEnd();
}



foo2(); 