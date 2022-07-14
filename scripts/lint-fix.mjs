import {execa} from 'execa';
import path from "node:path";
import url from "node:url";
const __dirname = path.dirname(url.fileURLToPath(import.meta.url));

(async () => {
	console.log('linting packages/backend ...');
	await execa('yarn', ['lint:fix'], {
		cwd: __dirname + '/../packages/backend',
		stdout: process.stdout,
		stderr: process.stderr,
	});

	console.log('linting packages/client ...');
	await execa('yarn', ['lint:fix'], {
		cwd: __dirname + '/../packages/client',
		stdout: process.stdout,
		stderr: process.stderr,
	});
})();