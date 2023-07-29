import { Component } from '@angular/core';

@Component({
  selector: 'amb-lisk-task',
  templateUrl: './lisk-task.component.html',
  styleUrls: ['./lisk-task.component.css'],
})
export class LiskTaskComponent {
  tasks = [
    {
      title: 'Generarar codigo para almacen',
      responsibleName: 'Edwin',
      points: '2',
      startDate: new Date(2023, 7, 29),
    },
    {
      title: 'Generarar conexion a la base de datos para almacen',
      responsibleName: 'Edwin',
      points: '2',
      startDate: new Date(2023, 7, 24),
    },
    {
      title: 'Generarar codigo qr para los productos para almacen',
      responsibleName: 'Edwin',
      points: '5',
      startDate: new Date(2023, 8, 9),
    },
    {
      title: 'Conectar API REST del regsitro civil',
      responsibleName: 'Edwin',
      points: '3',
      startDate: new Date(2023, 8, 2),
    },
  ];
}
