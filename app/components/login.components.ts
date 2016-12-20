import {Component, OnInit} from '@angular/core'
import {AutService, User} from '../services/auth.service'


@Component({
	selector: 'login-form',
	template: 
	`
	<p> la tienda es privada</p>
	<form (ngSubmit)="login()" #loginForm="ngForm" >

		<label>tu email:</label>
	<input type="text" required autocomplete="off"
		[(ngModel)]="user.email"
		placeholder="Email"
		name="email">

	<label> contreseña </label>
	<input type="password"
	required
	[(ngModel)]="user.password"
	placeholder="Escribe tu contraseña"
	name="password">
	<button type="submit" >Ingresar</button>
	</form>

	`
})

export class LoginComponent implements OnInit{
	user: User
	error: string 

	constructor(

		private auth:AutService){
		this.user={email: null, password:null}
	}

	login(){
		this.auth.login(this.user)
	}

	ngOnInit(){
		this.auth.check()
		if(this.auth.session)this.auth.redirectWelcome()
	}
}