import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NavparamService } from '../navparam.service';


@Component({
  selector: 'app-page4',
  templateUrl: './page4.page.html',
  styleUrls: ['./page4.page.scss'],
})
export class Page4Page implements OnInit {
  testTabs:boolean=true;

  email:any="";
  userid:String="";
  userid1:String;
  constructor(public route:Router,private activatedRoute:ActivatedRoute,private NavparamService:NavparamService) { 
    this.email=this.NavparamService.getNavData();

    this.userid1=this.getName(this.email);
  }
  ngOnInit() {
  }
  getName(name){
    for(var i = 0; i < name.length; i++){
if(name[i]!='@'){this.userid+=name[i]; 
}
else{break;}}
return this.userid;
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
    if(event.detail.checked){
      document.body.setAttribute('color-theme','dark');
    }
    else {   document.body.setAttribute('color-theme','light');}
  }
  changePassword(){
    this.NavparamService.setNavData(this.email);
    this.route.navigateByUrl('recover')
  }



}
