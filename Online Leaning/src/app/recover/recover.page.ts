import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { AlertController, LoadingController, ToastController } from '@ionic/angular';
import { NavparamService } from '../navparam.service';
@Component({
  selector: 'app-recover',
  templateUrl: './recover.page.html',
  styleUrls: ['./recover.page.scss'],
})
export class RecoverPage implements OnInit {

  email :string;
  password = '';
  error = '';
  username = '';
  image: number;

  constructor(
    private fireauth: AngularFireAuth,
    private router: Router,
    private toastController: ToastController,
    public loadingController: LoadingController,
    public alertController: AlertController,
    public NavparamService:NavparamService
  ) { 

    this.email=this.NavparamService.getNavData();
  }

  ngOnInit() {
  }

  async openLoader() {
    const loading = await this.loadingController.create({
      message: 'Please Wait ...',
      duration: 2000
    });
    await loading.present();
  }
  async closeLoading() {
    return await this.loadingController.dismiss();
  }

  recover() {
    this.fireauth.sendPasswordResetEmail(this.email)
      .then(data => {
        console.log(data);
        this.presentToast('Password reset email sent',  'bottom', 1000); // this is toastController
alert(' An Email has been sent to: '+this.email+ '  Please check your ' )
        this.router.navigateByUrl('/login');
      })
      .catch(err => {
        console.log(` failed ${err}`);
        this.error = err.message;
      });
  }
  

  

  async presentToast(message, position, duration) {
    const toast = await this.toastController.create({
      message,
      duration,
      position
    });
    toast.present();}
    

    
    
  
  }
