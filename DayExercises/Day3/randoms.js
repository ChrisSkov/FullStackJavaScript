const crypto = require('crypto');

const randomCotainer = {
    title: "Secure randoms",
    randoms: []

}

const size = 48;

crypto.randomBytes(size, (error, buffer) =>
{
    let hex = buffer.toString("hex");
    randomCotainer.randoms.push({
        length: hex.length,
        random: hex

    });
    crypto.randomBytes(size - 4, (error, buffer) =>
    {
        let hex = buffer.toString("hex");
        randomCotainer.randoms.push({
            length: hex.length,
            random: hex

        });
        crypto.randomBytes(size - 8, (error, buffer) =>
        {
            let hex = buffer.toString("hex");
            randomCotainer.randoms.push({
                length: hex.length,
                random: hex

            });
            console.log(JSON.stringify(randomCotainer, null, 4));
        });
    });
});


