import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { NavparamService } from '../navparam.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage  {
  
  email:string ="";
  pass:string ="";
  
  constructor(private auth:AngularFireAuth,private router:Router,private NavparamService:NavparamService) {
    
  }
  verif(){
     this.auth.signInWithEmailAndPassword(this.email,this.pass).then(
(data) => {
  //this.router.navigate(['home/'+this.email]);
  this.NavparamService.setNavData(this.email);
console.log(this.NavparamService.getNavData());
  this.router.navigate(['page1']);
}
     ).catch((err) => {
      // console.log(err);
       document.getElementById('test2').innerHTML="<h5>* Username or password are incorrect please try again!</h5>"

       

     }); 
  }
  aller_inscription(){
    this.router.navigateByUrl('/page1')

  }
  launchSecondPage(){
    console.log('clicked');
  }
  onKeydown(event) {
    if (event.key === "Enter") {
      this.verif();
    }
  }
 
}

