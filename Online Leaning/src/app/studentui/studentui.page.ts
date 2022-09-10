import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import { NavParams } from '@ionic/angular';
import { addMinutes } from 'date-fns';
import { identity } from 'rxjs';
import { NavparamService } from '../navparam.service';

@Component({
  selector: 'app-studentui',
  templateUrl: './studentui.page.html',
  styleUrls: ['./studentui.page.scss'],
})
export class StudentuiPage implements OnInit {
etds:any=[];
vid:any=[];
eng:String="eng";
holdon:String="";
searchTerm:String;
  constructor(private auth:AngularFireAuth,private fire:AngularFirestore, private route:Router,private nav:NavparamService) { 
    this.getEtudiant();
  //  this.getVideos();
  
  }

  ngOnInit() {
  }
  getEtudiant(){
    this.fire.collection("student").snapshotChanges().subscribe(
  data=>{
this.etds=data.map(
  e=>{
    return{
      id:e.payload.doc.id,
      age:e.payload.doc.data()["age"],
      tel:e.payload.doc.data()["tel"],
      username:e.payload.doc.data()["username"]
    }
  }
)
}
    )
  }


  getVideos(){
    this.fire.collection("videos").snapshotChanges().subscribe(
  data=>{
this.vid=data.map(
  e=>{
    
    return{
      type:e.payload.doc.data()["type"],
      url:e.payload.doc.data()["url"],
      title:e.payload.doc.data()["title"]
    }
  
  }

)
}
    )
  }
  delEtudiant(item)
{

    this.fire.doc("student/"+item.id).delete();
}

delTest(){  }


allerAjout(){
  this.route.navigateByUrl('ajout')
}
goToUpdatePage(item){
this.nav.setElement(item.id);
  this.route.navigateByUrl('update-etudiant');

}


compare(){
  if (this.eng.match(/^en.*$/)){
console.log('fine');
  }
  else{
    console.log('fail')
  }
}
search(q: string) { 

  this.fire.collection("videos").snapshotChanges().subscribe(
    data=>{
  this.vid=data.map(
    e=>{
      
      return{
        type:e.payload.doc.data()["type"],
        url:e.payload.doc.data()["url"],
        title:e.payload.doc.data()["title"]
      }
    
    }
  
  )
  }
      )
      this.searchTerm=q;
  console.log(q); 
}

}
