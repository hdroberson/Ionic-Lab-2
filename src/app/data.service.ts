import { Injectable } from '@angular/core';
import { Student } from './student';
import { Storage } from '@ionic/storage';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  students: Student[] = [];


  constructor(private storage : Storage) { 
    var _students = this.students;
    storage.get('studentList').then(res => {
    if (res) {
      this.students = res;
      } 
    });
  }

  saveStudent(student: Student) {
    this.students.push(student);
    this.storage.set('studentList', this.students);
  }

  getStudents() {
    return this.students;
  }
}
