const request = require('node:http')
const { exec } = require("child_process");

const pid = {};
const promiseArray = [];

for (let i = 0; i < 10; i++) {
    promiseArray.push(
        request.get({
            host: 'localhost', port: 8000, path: '/'
        },
            response => {
                const chunks = [];
                response.on('data', chunk => {
                    chunks.push(chunk)
                })

                response.on('end', () => {
                    const result = Buffer.concat(chunks).toString();
                    console.log(result)
                })
            }
        )
    )
}

Promise.all(promiseArray)
    .then(() => console.log(pid))

exec('curl --location --request GET http://localhost:8000/', (error, response) => {
    console.log("Response from exec method\n", response);
});