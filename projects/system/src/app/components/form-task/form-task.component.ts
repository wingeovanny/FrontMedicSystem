import { Component } from '@angular/core';

@Component({
  selector: 'amb-form-task',
  templateUrl: './form-task.component.html',
  styleUrls: ['./form-task.component.css'],
})
export class FormTaskComponent {
  descriptionTask!: string;
  save() {
    console.log('button clicked');
  }
  captureDescription(evt: any) {
    this.descriptionTask = evt.target.value;
  }
}
