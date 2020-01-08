import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { Component } from '@angular/core';

@Component ({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Moje kalkulacka';

  public num1:number;
  public num2:number;
  public num3: number;

  secist(){
    this.num3=this.num2+this.num1;
  }
  odecist(){
    this.num3=this.num1-this.num2;
  }
  vynasobit(){
    this.num3=this.num1*this.num2;
  }
  delit(){
    this.num3=this.num1/this.num2;
  }
  jedna(){
    this.num1+1==this.num1;
  }
}

