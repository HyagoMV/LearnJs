const axios = require("axios")
const gitGubApi = "https://api.github.com/users/hyagomv/repos"

async function foo() {
    const data = await axios.get(gitGubApi);
    console.log(data);
}

foo(); 
