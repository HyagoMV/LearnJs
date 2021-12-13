function foo(arg) {
    return new Promise((resolve, reject) => arg ? resolve("OK") : reject("Not OK"));
}


// -------------------------------

function bar(arg) {
     foo(arg)
        .then(resolve => console.log(resolve))
        .catch(reject => console.log(reject)); 
}

async function tar(arg) {
    try {
        const resolve = await foo(arg);
        console.log(resolve);
    } catch(reject) {
        console.log(reject);
    }   
}


foo(true)
    .then(resolve => console.log(resolve))
    .catch(reject => console.log(reject));

bar(true);

tar(true);