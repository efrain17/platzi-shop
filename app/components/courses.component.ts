import {Component, OnInit} from '@angular/core';
import {Course} from '../common/course';
import {ApiService} from '../services/api.service'

@Component ({
  selector: 'courses',
  template : 
  `
    <h2>{{title}}</h2>
    <div class="courses_list">
      <coursebox
        [course]="course_info"
        *ngFor = "let course_info of courses"
      ></coursebox>
    </div>
  `,
  providers : [ApiService]
})

export class CoursesComponent implements OnInit{ 
  title : string = 'Cursos disponibles'
  courses : Course []

  constructor (private ApiService: ApiService){

  }

  ngOnInit(){
     this.getCourses()
  }

  getCourses(){
    this.ApiService.getCourse().then(
      courses => this.courses = courses
    )
  }


}