import { Component, Input, ViewEncapsulation, } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation : ViewEncapsulation.None
})
export class ServerElementComponent {
@Input('srvElement') element:{ name: string; content: string; } ;
@Input() name:string;
  constructor(){}
}
