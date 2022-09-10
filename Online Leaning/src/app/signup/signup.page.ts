import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { SignupPageForm } from './signup.page.form';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {
  form:FormGroup;
password:String;
  email:string ="";
  pass1:string ="";
  pass2:string ="";
  username:String;
 // Gender:any;
  age:String;
  tel:String;
  constructor(private formBuilder:FormBuilder,private router:Router,private auth:AngularFireAuth,private fire:AngularFirestore) { 

    
  }
  Ajouter(){
    let student = {
      username:this.username,/*Gender:this.Gender,*/age:this.age,tel:this.tel
      
    }
    
    this.fire.collection('student').doc(this.email).set(student);
//if you want auto generated primary key
    /*this.fire.collection('student').add(
      {username:this.username,Gender:this.Gender,age:this.age,tel:this.tel}
    );*/
    this.email="";
this.username="";
//this.Gender="";
this.age="";
this.tel="";

  }
  ngOnInit() {
    this.form= new SignupPageForm(this.formBuilder).createForm();
  }
   checkPassword(str)
{
    var re = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    return re.test(str);
}

  signUPUser(){
 this.router.navigate(['login']);
  }
  inscrire(){
    if (this.pass1===this.pass2){
    this.auth.createUserWithEmailAndPassword(this.email,this.pass1).then(
data=> {
  alert('user: '+this.email+'has been created with succes login now')

  this.Ajouter()
  this.router.navigateByUrl("/login");
}
    ).catch(
      err =>{console.log(err);}
    );
  }
  else console.log("password is not repeated correctly");
}
showSelected(){
  //console.log(this.Gender);
}
 
}
