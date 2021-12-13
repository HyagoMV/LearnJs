const axios = require("axios")
const gitGubApi = "https://api.github.com/users/hyagomv/repos"

axios.get(gitGubApi)
     .then(data => console.log(data));

