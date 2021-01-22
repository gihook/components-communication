import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class LoggerService {
  log(message: string) {
    const obj = { test: 1 };
    console.log({ message, obj });
  }
}
