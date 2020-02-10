const http = require('http');

const dos = require("./dosDetector");

const myDos = new dos.Dos_Detect(9001);

myDos.on("DosDetected", event =>
{
    console.log(
        `We're under fire, Chief!: URL: ${event.url} at this time: ${event.timeBetweenCalls}`
    );
});

const server = http.createServer((req, res) =>
{
    if (req.url === '/api/os-info')
    {
        res.setHeader('Content-Type', 'application/json');
        //Return a response with OS-info, using the code implemented in part-a
        const osInfo = require("./OS-Info");
        res.write(JSON.stringify(osInfo.osInfo()));
        console.log(osInfo.osInfo());
        return res.end();
    }
    if (req.url === '/')
    {
        res.setHeader('Content-Type', 'text/html');
        res.write(`<h2>Simple node HTTP server demo</h2>
      <p>Exposes this endpoint <code>/api/os-info</code></p>
    `);
        return res.end();
    }
});
server.on('connection', (sock) =>
{
    console.log(sock.remoteAddress);
    // You can get the client-IP in here, using sock.remoteAddress)
    myDos.addUrl(sock.remoteAddress);
});
server.listen(3000);
console.log('listening on 3000');
//Register for the "DosDetected" event and console.log the url and time info.
