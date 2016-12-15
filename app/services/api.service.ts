import {Injectable} from '@angular/core'
import {Http} from '@angular/http'
import 'rxjs/add/operator/toPromise'
import {Course} from '../common/course'

@Injectable ()

export class ApiService {

	constructor(private http:Http) {

	}

	getCourse(){

	  let url='/data/info.json'
	  return this.http.get(url)
	    .toPromise()
	    .then(response => response.json())
	    .catch(this.error)
	}

	error(error:any){
		return Promise.reject(error.message || error)
	}

}