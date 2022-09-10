import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-acceuil',
  templateUrl: './acceuil.page.html',
  styleUrls: ['./acceuil.page.scss'],
})
export class AcceuilPage implements OnInit {
  name:any="";
  userid:String="";
  userid1:String;
  
  constructor(private activatedRoute:ActivatedRoute) { 
    
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

}
