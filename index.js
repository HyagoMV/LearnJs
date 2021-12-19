function bar(fail) {
    return new Promise((resolve, reject) => {
        if (!fail)
            resolve("OK")
        else
            reject("Fail")
    });
}

bar(true)
    .then(data=>console.log("T: " + data))
    .catch(data=>console.log("C: " + data))

// ======================

async function foo(fail) {
    if (!fail)
        return "Ok"
    else
        throw "Fail"
}

foo(!true)
    .then(data=>console.log("T: " + data))
    .catch(data=>console.log("C: " + data))

