import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-marks',
  templateUrl: './marks.component.html',
  styleUrls: ['./marks.component.css']
})
export class MarksComponent implements OnInit {

  constructor() { }
  marks: any;
  headings: any;
  newList: any;
  filteredList: any = [];
  isTablePage: boolean = true;
  details: any;
  ngOnInit() {
    this.headings = ["Sl no", "Name", "Maths", "English", "Physics", "Chemistry", "Total", "Grade"];
    this.marks = [
      {
        "firstName": "Rosa",
        "lastName": "Chase",
        "subject": "english",
        "marks": 52
      },
      {
        "firstName": "Reese",
        "lastName": "Yang",
        "subject": "English",
        "marks": 36
      },
      {
        "firstName": "Adkins",
        "lastName": "Becker",
        "subject": "chemistry",
        "marks": 80
      },
      {
        "firstName": "Hoover",
        "lastName": "Hardin",
        "subject": "chemistry",
        "marks": 66
      },
      {
        "firstName": "Lorene",
        "lastName": "Rasmussen",
        "subject": "PHYSICS",
        "marks": 69
      },
      {
        "firstName": "Melinda",
        "lastName": "Sullivan",
        "subject": "Chemistry",
        "marks": 95
      },
      {
        "firstName": "Berry",
        "lastName": "Hubbard",
        "subject": "ENGLISH",
        "marks": 35
      },
      {
        "firstName": "Roberts",
        "lastName": "Mendoza",
        "subject": "chemistry",
        "marks": 59
      },
      {
        "firstName": "Melinda",
        "lastName": "Sullivan",
        "subject": "PHYSICS",
        "marks": 95
      },
      {
        "firstName": "Sampson",
        "lastName": "Webb",
        "subject": "Maths",
        "marks": 56
      },
      {
        "firstName": "Roberts",
        "lastName": "Mendoza",
        "subject": "Physics",
        "marks": 56
      },
      {
        "firstName": "Berry",
        "lastName": "Hubbard",
        "subject": "Maths",
        "marks": 65
      },
      {
        "firstName": "Adkins",
        "lastName": "Becker",
        "subject": "English",
        "marks": 60
      },
      {
        "firstName": "Kasey",
        "lastName": "Brooks",
        "subject": "maths",
        "marks": 67
      },
      {
        "firstName": "Melinda",
        "lastName": "Sullivan",
        "subject": "english",
        "marks": 85
      },
      {
        "firstName": "Roberts",
        "lastName": "Mendoza",
        "subject": "Maths",
        "marks": 72
      },
      {
        "firstName": "Hoover",
        "lastName": "Hardin",
        "subject": "English",
        "marks": 28
      },
      {
        "firstName": "Hoover",
        "lastName": "Hardin",
        "subject": "Maths",
        "marks": 58
      },
      {
        "firstName": "Adkins",
        "lastName": "Becker",
        "subject": "maths",
        "marks": 60
      },
      {
        "firstName": "Melinda",
        "lastName": "Sullivan",
        "subject": "maths",
        "marks": 65
      },
      {
        "firstName": "Rosa",
        "lastName": "Chase",
        "subject": "Maths",
        "marks": 35
      },
      {
        "firstName": "Berry",
        "lastName": "Hubbard",
        "subject": "chemistry",
        "marks": 35
      },
      {
        "firstName": "Sampson",
        "lastName": "Webb",
        "subject": "English",
        "marks": 59
      },
      {
        "firstName": "Lorene",
        "lastName": "Rasmussen",
        "subject": "English",
        "marks": 52
      },
      {
        "firstName": "Kasey",
        "lastName": "Brooks",
        "subject": "ENGLISH",
        "marks": 67
      },
      {
        "firstName": "Sampson",
        "lastName": "Webb",
        "subject": "Chemistry",
        "marks": 76
      },
      {
        "firstName": "Berry",
        "lastName": "Hubbard",
        "subject": "physics",
        "marks": 48
      },
      {
        "firstName": "Rosa",
        "lastName": "Chase",
        "subject": "Physics",
        "marks": 75
      },
      {
        "firstName": "Hoover",
        "lastName": "Hardin",
        "subject": "Physics",
        "marks": 42
      },
      {
        "firstName": "Reese",
        "lastName": "Yang",
        "subject": "chemistry",
        "marks": 55
      },
      {
        "firstName": "Roberts",
        "lastName": "Mendoza",
        "subject": "English",
        "marks": 52
      },
      {
        "firstName": "Lorene",
        "lastName": "Rasmussen",
        "subject": "Maths",
        "marks": 90
      },
      {
        "firstName": "Kasey",
        "lastName": "Brooks",
        "subject": "Physics",
        "marks": 67
      },
      {
        "firstName": "Reese",
        "lastName": "Yang",
        "subject": "maths",
        "marks": 36
      },
      {
        "firstName": "Sampson",
        "lastName": "Webb",
        "subject": "PHYSICS",
        "marks": 96
      },
      {
        "firstName": "Lorene",
        "lastName": "Rasmussen",
        "subject": "chemistry",
        "marks": 72
      },
      {
        "firstName": "Adkins",
        "lastName": "Becker",
        "subject": "physics",
        "marks": 60
      },
      {
        "firstName": "Reese",
        "lastName": "Yang",
        "subject": "Physics",
        "marks": 58
      },
      {
        "firstName": "Kasey",
        "lastName": "Brooks",
        "subject": "Chemistry",
        "marks": 77
      },
      {
        "firstName": "Rosa",
        "lastName": "Chase",
        "subject": "Chemistry",
        "marks": 62
      }
    ]


    this.newList = Array.from(new Set(this.marks.map((item) => item.firstName)))

    for (var i = 0; i < this.newList.length; i++) {
      this.filteredList[i] = this.marks.filter(mark => mark.firstName == this.newList[i]);
      var totalmarks = this.filteredList[i][0].marks + this.filteredList[i][1].marks + this.filteredList[i][2].marks + this.filteredList[i][3].marks;
      var percentage = totalmarks / 4;
      if (percentage >= 90) {
        this.filteredList[i].grade = 'DISTINCTION';
      } else if (percentage >= 75) {
        this.filteredList[i].grade = 'FIRST_CLASS';
      } else if (percentage >= 60) {
        this.filteredList[i].grade = 'SECOND_CLASS';
      }

    }
  }


  redirectToDetails(row) {
    this.isTablePage = false;
    this.details = row;
  }
}
