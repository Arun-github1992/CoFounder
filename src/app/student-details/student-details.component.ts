import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.css']
})
export class StudentDetailsComponent implements OnInit {
@Input() details:any;
  constructor() { }

  ngOnInit() {
    this.details=this.details;
  }

}
