import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { ActivatedRoute, Router } from '@angular/router';
import { NavparamService } from '../navparam.service';

@Component({
  selector: 'app-update-etudiant',
  templateUrl: './update-etudiant.page.html',
  styleUrls: ['./update-etudiant.page.scss'],
})
export class UpdateEtudiantPage implements OnInit {
  tempo:String="";
  id: string;
  identi:String;
  nom: string;
  prenom: string;
 groupe: number;
   constructor(private fire:AngularFirestore,private route:Router,private nav:NavparamService) { 
    this.id=this.nav.getElement();
  }

  ngOnInit() {
  }
  getId(){
    for(var i=0;i<=this.id.length;i++){
      if(i!=0)
      this.tempo+=this.id[i];
    }
    return this.tempo;
    }

  UpdateRecord(nom, prenom, groupe){
    let updaterecord = {}
    updaterecord['nom'] = nom,
    updaterecord['prenom'] = prenom,
    updaterecord['groupe'] = groupe,
    this.fire.doc('/etudiants/'+this.id).update(updaterecord).then(()=>{
      this.route.navigateByUrl('studentui') 
    })
  }

}
