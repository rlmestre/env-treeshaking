import { Component, inject, Injectable } from '@angular/core';
import { FormControl } from '@angular/forms';
import { production } from './env/env';

@Injectable() export class ProdService { #a = 'prod'; }
@Injectable() export class DevService { #a = 'dev'; }

@Component({
  selector: 'app-root',
  standalone: true,
  template: `
    <h1>Environment treeshaking example</h1>
    <button (click)="getThing()">Do thing</button>
  `,
})
export class AppComponent {
  #service = production ? inject(ProdService) : inject(DevService);

  getThing() {
    if (production) {
      return null
    } else {
      return new FormControl();
    }
  }
}
