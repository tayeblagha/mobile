import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page1',
  templateUrl: './page1.page.html',
  styleUrls: ['./page1.page.scss'],
})
export class Page1Page implements OnInit {

  email:string ="";
  pass:string ="";
  lightMode:boolean;
  constructor(private route:Router,private auth:AngularFireAuth,private router:Router) {
    
  }
  ngOnInit() {
   
  }
  inscrire(){
    this.auth.createUserWithEmailAndPassword(this.email,this.pass).then(
data=> {
  this.router.navigateByUrl("/login");
}
    ).catch(
      err =>{console.log(err);}
    );
  }



  page1(){
    this.route.navigateByUrl('page1');
  }
  page2(){
    this.route.navigateByUrl('page2');
  }
  page3(){
    this.route.navigateByUrl('page3');
  }
  page4(){
    this.route.navigateByUrl('page4');
  }
  toggleTheme(event){
    this.lightMode=!this.lightMode;
    if(event.detail.checked){
      document.body.setAttribute('color-theme','dark');
    }
    else {   document.body.setAttribute('color-theme','light');}
  }


}
