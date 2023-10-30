const request = require('node:http')
const fileSystem = require('fs')
/*
* Simple get request using http module
* ====================================
*/

const req = request.get({
    host: 'jsonplaceholder.typicode.com',
    path: '/todos/1',
    method: 'GET',
},
    response => {
        console.log(response.statusCode)
    })

req.end();
/*
* Writing response to file, sine response is a readable stream
* ============================================================
*/
const writeableStream = fileSystem.createWriteStream("responseFile.txt");

const req2 = request.get({
    host: 'jsonplaceholder.typicode.com',
    path: '/todos',
    method: 'GET',
},
    response => {
        response.pipe(writeableStream)
    })

req2.end();

/*
* Storing response in a variable
* ==============================
* 
* Response is a readable stream, so before  storing it into a variable we have to parse the data to string
*/
const req3 = request.get({
    host: 'jsonplaceholder.typicode.com',
    path: '/todos',
    method: 'GET',
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
    })

req3.end();

/*
* Creating a wrapper function to simply above functions
* =====================================================
*/

function fetch(options) {
    return new Promise((resolve, reject) => {
        request.get(
            options,
            response => {
                const { statusCode } = response;

                if (statusCode >= 300)
                    reject(new Error(response.statusMessage))

                const chunks = [];
                response.on('data', chunk => {
                    chunks.push(chunk)
                })

                response.on('end', () => {
                    const result = Buffer.concat(chunks).toString();
                    resolve(JSON.parse(result))
                })
            }
        )
            .end()
    })
}

/*
* Making fetch request using above wrapper method
* ===============================================
*/
fetch({
    host: 'jsonplaceholder.typicode.com',
    path: '/todos',
})
.then(res => {
    console.log(res)
})
.catch(err => {
    console.error(err)
})