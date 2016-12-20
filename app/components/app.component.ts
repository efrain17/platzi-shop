import {Component, OnInit} from '@angular/core';
import {CartService} from '../services/cart.service';
import {AutService} from '../services/auth.service'


@Component({
  selector : 'my-app',
  template: 
  `
    <header>
      Cursos Platzi  
    </header>

    <nav *ngIf="this.autService.session">
      <a routerLink="">Inicio</a>
      <a routerLink="courses">Cursos</a>
    </nav>

    <div>
      <a *ngIf="!autService.session" routerLink="login">Iniciar Sesion</a>
      <a *ngIf="autService.session" (click)="logout()">Cerrar Sesion</a>
    </div>

    <section>
      <router-outlet></router-outlet>
    </section>
  `,
  providers : [CartService, AutService]
})

export class AppComponent implements OnInit{
  
  
  constructor(
    private autService:AutService){
  }

  logout(){
    this.autService.logout()
  }

  ngOnInit(){
    this.autService.check()
    console.log(this.autService.session)
  }
}