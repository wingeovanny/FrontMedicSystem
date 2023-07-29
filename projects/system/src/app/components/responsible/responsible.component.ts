import { Component, Input } from '@angular/core';

@Component({
  selector: 'amb-responsible',
  templateUrl: './responsible.component.html',
  styleUrls: ['./responsible.component.css'],
})
export class ResponsibleComponent {
  @Input()
  name!: string;
  @Input()
  point!: string;
}
