import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-ajout',
  templateUrl: './ajout.page.html',
  styleUrls: ['./ajout.page.scss'],
})
export class AjoutPage implements OnInit {
  nom: String = "";
  prenom: String = "";
  groupe: String = "";
  url: String = "";
  type: String = "";
  title: String = "";
  startTime:any;
  constructor(private fire: AngularFirestore, private route: Router, private alertController: AlertController) {

  }

  ngOnInit() {
  }
  
  Ajouter() {

    this.fire.collection("videos").add(
      { url: this.url, type: this.type, title: this.title }
    );
   /* this.url = "";*/
    this.type = "";
    this.title = "";
    //this.route.navigateByUrl('studentui')
  }


  Addvideo() {
    this.fire.collection("etudiants").add(
      { nom: this.nom, prenom: this.prenom, groupe: this.groupe }
    );
    this.nom = "";
    this.prenom = "";
    this.groupe = "";
    this.route.navigateByUrl('studentui')
  }
  /*async showAlert() {
    await this.alertCtrl.create(
      { header: "Enter Promo", subHeader: "Promocode", message: "Please enter you promo code", 
      inputs: [{ type: 'text', name: 'promo', placeholder: "Promo code" }],
       buttons: [{ text: "Apply", handler: (res) => { console.log(res.promo);}
  } ,{ text: "Cancel" }]}).then(res=>res.present());


}
async presentAlert() {
  const alert = await this.alertController.create({
   // cssClass: 'my-custom-class',
    header: 'Alert',
    subHeader: 'Subtitle',
    message: 'This is an alert message.',
    buttons: ['OK']
  });

  await alert.present();

  const { role } = await alert.onDidDismiss();
  console.log('onDidDismiss resolved with role', role);
}*/
 displayName() {
 /* var iDiv = document.createElement('input');
  iDiv.id="lbl2";
iDiv.setAttribute("type","text");
iDiv.setAttribute("style", "background-color: transparent;");
iDiv.setAttribute('width','400px')
iDiv.setAttribute('height','1000px')
iDiv.setAttribute("value","test");
iDiv.setAttribute("placeholder","Label2 placeholder");*/
document.getElementById('test2').innerHTML="hello baby"
}

}
