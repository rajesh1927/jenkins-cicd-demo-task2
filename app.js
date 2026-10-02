const http = require("http");

const PORT = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
    res.writeHead(200, {
        "Content-Type": "text/html"
    });

    res.end(`
        <h1>Jenkins CI/CD Demo</h1>
        <p>Application deployed successfully using Jenkins and Docker.</p>
    `);
});

server.listen(PORT, () => {
    console.log(`Application running on port ${PORT}`);
});
