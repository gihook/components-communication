import { Injectable } from '@angular/core';

@Injectable()
export class ColorLogger {
  log(message: string) {
    console.log(`%cMessage: ${message}`, 'color: blue; font-size: 20px');
  }
}
