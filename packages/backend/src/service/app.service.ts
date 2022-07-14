import { Injectable } from '@nestjs/common';
import * as fs from 'fs';
import { join } from 'path';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  getIndexPage(): string {
    return fs.readFileSync(
      join(__dirname, '../../../client/built/index.html'),
      'utf8',
    );
  }

  getInputPage(): string {
    return fs.readFileSync(
      join(__dirname, '../../../client/built/input.html'),
      'utf8',
    );
  }

  getListPage(): string {
    return fs.readFileSync(
      join(__dirname, '../../../client/built/list.html'),
      'utf8',
    );
  }

  getOutputPage(): string {
    return fs.readFileSync(
      join(__dirname, '../../../client/built/output.html'),
      'utf8',
    );
  }

  getAccountPage(): string {
    return fs.readFileSync(
      join(__dirname, '../../../client/built/account.html'),
      'utf8',
    );
  }
}
