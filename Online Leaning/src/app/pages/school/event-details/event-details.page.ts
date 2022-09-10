import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { NavparamService } from 'src/app/navparam.service';
@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.page.html',
  styleUrls: ['./event-details.page.scss'],
})
export class EventDetailsPage implements OnInit {

  title:String;
  description:String;
  startTime:String;
  endTime:String;
  img:String;

  constructor(public modalController:ModalController, public NavParams:NavparamService) {
this.title=NavParams.getTitle();
this.description=this.NavParams.getdescription();
this.startTime=this.NavParams.getStartTime();
this.endTime=this.NavParams.getEndTime();
this.img=this.NavParams.getImage();
   }

  ngOnInit() {
  }
  close(){this.modalController.dismiss();}

}
