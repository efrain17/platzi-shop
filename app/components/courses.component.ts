import {Component, OnInit} from '@angular/core';
import {Course} from '../common/course';
import {ApiService} from '../services/api.service'
import {AutService} from '../services/auth.service'

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
      <cart></cart>
    </div>
  `,
  providers : [ApiService]
})

export class CoursesComponent implements OnInit{ 
  title : string = 'Cursos disponibles'
  courses : Course []

  constructor (
    private ApiService: ApiService,
    private auth:AutService){

  }
  ngOnInit(){
     this.auth.check()
     this.getCourses()
  }

  getCourses(){
    this.ApiService.getCourse().then(
      courses => this.courses = courses
    )
  }
  
}