import {execa} from 'execa';
import path from "node:path";
import url from "node:url";
const __dirname = path.dirname(url.fileURLToPath(import.meta.url));

(async () => {
    console.log('installing packages/backend ...');
    await execa('yarn', ['install'], {
        cwd: __dirname + '/../packages/backend',
        stdout: process.stdout,
        stderr: process.stderr,
    });

    console.log('installing packages/client ...');
    await execa('yarn', ['install'], {
        cwd: __dirname + '/../packages/client',
        stdout: process.stdout,
        stderr: process.stderr,
    });
})();