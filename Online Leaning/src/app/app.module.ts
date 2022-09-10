import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import {AngularFireModule} from '@angular/fire/compat';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AngularFireAuthModule} from '@angular/fire/compat/auth';
import { AcceuilPage } from './acceuil/acceuil.page';
import { NavparamService} from './navparam.service'
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { DatePipe } from '@angular/common';
import { SuperTabsModule} from '@ionic-super-tabs/angular'
const firebaseConfig = {
  apiKey: "AIzaSyDTGTvENQ_H4Eijb_lQbFgnZdcopoOT5jw",
  authDomain: "appgcrb2.firebaseapp.com",
  projectId: "appgcrb2",
  storageBucket: "appgcrb2.appspot.com",
  messagingSenderId: "688591597737",
  appId: "1:688591597737:web:c9b6e619e1bcc4ce51f9b8"
};


@NgModule({
  declarations: [AppComponent,AcceuilPage],
  entryComponents: [AcceuilPage],
  imports: [SuperTabsModule.forRoot(),BrowserModule, IonicModule.forRoot(), AppRoutingModule,AngularFireModule.initializeApp(firebaseConfig),AngularFireAuthModule,AngularFirestoreModule],
  providers: [DatePipe,NavparamService,{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
