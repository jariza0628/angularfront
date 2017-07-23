import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  msg:string = '';
  title:string = 'Angular CRUD Estudiantes';
  students = [
    {'name': 'Jose Perez', id: '123', genero:'masculino'},
    {'name': 'Alan Brito', id: '456', genero:'masculino'},
    {'name': 'Rosa melo', id: '789', genero:'femenino'}
  ];

  model:any = {};
  model2:any = {};
  hideUpdate:boolean = true;

  addStudent():void{
    this.students.push(this.model);
    this.msg = 'Agregado con exito';
  }
  updateStudent():void {
    let i = this.myValue;
    for(let j = 0; j < this.students.length; j++){
      if(i == j) {
        this.students[i] = this.model2;
        this.msg = 'campo actualizado';
        this.model2 = {};
      }
    }
  }
  deleteStudent(i):void {
    var answer = confirm('Desea eliminarlo?');
    if(answer) {
      this.students.splice(i, 1);
      this.msg = 'Eliminado con exito';
    }
  }

  myValue;
  editStudent(i):void {
    this.hideUpdate = false;
    this.model2.name = this.students[i].name;
    this.model2.id = this.students[i].id;
    this.model2.genero = this.students[i].genero;
    this.myValue = i;
  }



  closeAlert():void {
    this.msg = '';
  }

}
