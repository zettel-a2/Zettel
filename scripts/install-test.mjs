import { execa } from 'execa';
import path from "node:path";
import url from "node:url";
const __dirname = path.dirname(url.fileURLToPath(import.meta.url));

// 環境変数(production)かどうか確認
const isProduction = process.env.NODE_ENV === 'production';

(async () => {
    if (process.env.NODE_ENV !== test) {
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
    } else {
        console.log('installing packages/backend ...');
        await execa('yarn', ['install', "--immutable", "--immutable-cache", "--check-cache"], {
            cwd: __dirname + '/../packages/backend',
            stdout: process.stdout,
            stderr: process.stderr,
        });

        console.log('installing packages/client ...');
        await execa('yarn', ['install', "--immutable", "--immutable-cache", "--check-cache"], {
            cwd: __dirname + '/../packages/client',
            stdout: process.stdout,
            stderr: process.stderr,
        });
    }
})();