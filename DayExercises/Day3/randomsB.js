const crypto = require("crypto");

const makeSecureRandom = size =>
{
    return new Promise((resolve, reject) =>
    {
        crypto.randomBytes(size, (error, buffer) =>
        {
            if (error)
            {
                return reject(error);
            }
            let hex = buffer.toString("hex");
            return resolve({
                length: hex.length,
                random: hex
            });
        });
    });
};


const getSecureRandoms = async sizeList =>
{
    const promises = [];
    for (let index = 0; index < sizeList.length; index++)
    {
        const element = makeSecureRandom(sizeList[index]);
        promises.push(element);
    }
    return await Promise.all(promises);
};

module.exports.getSecureRandoms = getSecureRandoms;