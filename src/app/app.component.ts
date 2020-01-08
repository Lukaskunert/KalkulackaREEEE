import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-calculator'; 

  public num1= 0;
  public num2= 0;
  public num3= 0;

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
    
  }
  }



