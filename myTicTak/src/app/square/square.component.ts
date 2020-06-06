import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-square',
  template: `
   <button *ngIf="value">{{value}}</button>
   <button nbButton *ngIf="!value"> {{value}}</button>
 
  
  
  `,
  styles: ['button {width: 100%; height: 100%; font-size: 5em !important;}']
})
export class SquareComponent {
 @Input() value: 'X' | 'O';
 
}

/**
 *   <button nbButton hero status="success" *ngIf="value =='X'"> {{value}}</button>
   <button nbButton hero status="info" *ngIf="value =='0'"> {{value}}</button>
 */