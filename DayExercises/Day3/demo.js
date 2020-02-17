const promiseDemo = (msg, delay, makeError) => new Promise((resolve, reject) =>
{
    setTimeout(() =>
    {
        const err = (Math.random() * 10) < 10
        if (makeError && err)
        {
            return reject(new Error("UPPPS"))
        }
        return resolve(msg.toUpperCase());
    }, delay);
})


const pd1 = promiseDemo("sker der,g", 1000, false)
pd1
    .then(data => console.log(data))
    .catch(e => console.log(e.message))
    .finally(() => console.log("We done, son"))