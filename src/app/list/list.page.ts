import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Student } from '../student';

@Component({
  selector: 'app-list',
  templateUrl: 'list.page.html',
  styleUrls: ['list.page.scss']
})
export class ListPage {
  allStudents: Student[] = [];

  constructor(private dataSrv: DataService) {
    dataSrv.getStudents().subscribe(res => {
      this.allStudents = res;
    });
    
  this.allStudents = dataSrv.getStudents();

  }

  // add back when alpha.4 is out
  // navigate(item) {
  //   this.router.navigate(['/list', JSON.stringify(item)]);
  // }
}
