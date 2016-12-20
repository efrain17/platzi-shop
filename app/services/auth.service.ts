import {Injectable} from '@angular/core'
import {Router} from '@angular/router'

export interface User {
	email: string, 
	password: string
}

const USER = [
	{
		email:'car@hotmail.com',
		password: '123' 
	}
]

@Injectable()

export class AutService{
	users: User[] =USER
	session: boolean= false

	constructor(
		private router :Router){

	}

	redirect(){
		let link=['/login']
		this.session = false
		this.router.navigate(link)
	}

	redirectWelcome(){
		let link=['']
		this.router.navigate(link)
	}

	logout(){
		localStorage.removeItem("user")

		this.redirect()
	}

	login(user:User){
		let user_exist=this.users.find(us => us.email == user.email)

		if(user_exist && user_exist.password == user.password){
			localStorage.setItem("user",JSON.stringify(user_exist));
			this.session =true
			let link = ['/']
			this.router.navigate(link)
		}

	}

	check(){
		if (!localStorage.getItem('user')){
			this.session = false
			this.redirect()
		}
		else this.session = true 
	}

	getSession(){
		return this.session
	}

	user(){
		return localStorage.getItem("user")
	}

}
