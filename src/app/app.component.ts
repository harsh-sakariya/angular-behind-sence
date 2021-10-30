import { Component, DoCheck } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements DoCheck {
  students = [
    {
      firstName: "harsh",
      lastName: "sakariya",
      rollNo: 101
    },
    {
      firstName: "test1",
      lastName: "testing1",
      rollNo: 102
    },
    {
      firstName: "test2",
      lastName: "testing2",
      rollNo: 103
    },
    {
      firstName: "test3",
      lastName: "testing3",
      rollNo: 104
    }
  ];

  ngDoCheck(){
    console.log("ngDoCheck is called");
  }

  onAddStudent(){
    const newStudents = [
      {
        firstName: "test4",
        lastName: "testing4",
        rollNo: 105
      },
      {
        firstName: "test5",
        lastName: "testing5",
        rollNo: 106
      }
    ]
    this.students.push(...newStudents);  
  }

  onChangeFirstName(){
    for(const student of this.students){
      student.firstName = "firstName";
    }
  }

  onChangeInstance(){
    this.students = this.students.slice();
  }
}
