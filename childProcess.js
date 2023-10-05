
const { spawn, exec, execFile } = require("child_process");
const { createReadStream } = require("fs");

/**
 * This child process will list all the files in the current directory on Linux or Mac, 
 * and for Windows we need to replace 'ls' with 'dir'.
 * 
 * By calling spawn, we create an instance of a ChildProcess. Some of the things we get 
 * access from it are standard input/output streams: stdin, stdout, and stderr.
 */
const child = spawn('ls');

child.stdout.on('data', (data) => {
  console.log(data.toString());
});

/**
 * We can paas the array of arguments, in which we can define the directory whose content we want to know
 */

const childProcessForOtherDirectory = spawn('ls', ['./folder']);

childProcessForOtherDirectory.stdout.on('data', (data) => {
  console.log(data.toString());
});

/**
 * Below we are creating a child process to print the word count in the file "file.txt", 
 */
const readableStream = createReadStream('./file.txt');
const wc = spawn('wc', ['-c']);

readableStream.pipe(wc.stdin);

wc.stdout.on('data', (data) => {
  console.log(`Number of characters: ${data}`);
});

/**
 * Since we can not paas the argument in a single line like this, "ls ./folder", because it will throw an error
 * there is a way we can do this, we can paas {shell: true} and it will accept the arguments in a single line
 * "spawn" method does not creat a shell to execute commands, but if we pass shell: true it creates a shell. Not
 * using a shell is a bit better in terms of performance.
 */

const childProcessShell = spawn('ls ./folder', { shell: true });

childProcessShell.stdout.on('data', (data) => {
  console.log(data.toString());
});

/**
 * The "spawn" function deals with streams, we have another method that deals with the callbacks and that is "exec". The
 * exec function creates a shell to execute commands
 */

exec('ls | grep .txt', (error, response) => {
  console.log("Response from exec method\n", response);
});

/**
 * There is another method of "execFile" that is a combination of "spawn" and "exec". The "execFile" method does not create
 * a shell and operates with callbacks instead of streams.
 */

execFile('ls', (error, result) => {
  console.log("Response from the execFile method: \n", result);
});