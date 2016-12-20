import {Component, OnInit} from '@angular/core'
import {ActivatedRoute, Params} from '@angular/router'
import {Location} from '@angular/common';
import {Course} from '../common/course'
import {ApiService} from '../services/api.service'
import {AutService} from '../services/auth.service'

@Component({
	 template : `
    <div class="detail-course" *ngIf="course" >
      <img [src]="course.image">
      <h2>{{course.name}}</h2>
      <span class="number">
        Costo de {{course.price | currency : 'USD': true : '1.2-2'}}
      </span> 
      <p>
      {{course.description}} impartido por {{course.instructor}}
      </p>
    </div>
  `,
  providers : [ApiService]
})

export class CourseDetail implements OnInit{
    
	course: Course; 

    constructor(
	  private route: ActivatedRoute,
	  private location : Location,
	  private ApiService : ApiService,
    private auth:AutService){

    }

	ngOnInit(){
    this.auth.check()

		this.route.params.forEach((params: Params)=>{
			let id= +params ['id']
			this.ApiService.getCourseId(id)
				.then(course=> this.course = course)
		})


	}

}