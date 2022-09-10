import { Component, ViewChild } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { format, parseISO } from 'date-fns';
import { CalendarComponent } from 'ionic2-calendar';
import { CalendarMode } from 'ionic2-calendar/calendar';
import { NavparamService } from '../navparam.service';
import { EventDetailsPage } from '../pages/school/event-details/event-details.page';
import { DatePipe } from '@angular/common';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  testTabs:boolean=true;
  date1:any;
  date2:string;
  event=[];
  allEvents=[];
  currentMonth:string;
  calendar= {
mode:'month' as CalendarMode,
currentDate: new Date()
  }
  newEvent={
title:'',
description:'',
startTime:'',
endTime:'',
img:'',
  }

  newEventSol={
    title:'',
    description:'',
    startTime:'',
    endTime:'',
    img:'',
      }
  myData =[
    
     /*{title:"English Exam",
    description: "English Exam",
    startTime: new Date(2022,4,18,10,30,0),
    endTime: new Date(2022,4,18,12,30,0),
    img: 'english',
     },
     {title:"UML Exam",
    description: "UML Exam",
    startTime: new Date(2022,4,19,10,30,0),
    endTime: new Date(2022,4,19,12,30,0),
    img: 'conceptionUml',
     },
     {title:"Network Exam",
    description: "Network Exam",
    startTime: new Date(2022,4,20,10,30,0),
    endTime: new Date(2022,4,20,12,30,0),
    img: 'reseau',
     },
     {title:"wlan Exam",
    description: "wlan Exam",
    startTime: new Date(2022,4,21,10,30,0),
    endTime: new Date(2022,4,21,12,30,0),
    img: 'wlan',
     },
     {title:"Telecom Exam",
    description: "Telecom Exam",
    startTime: new Date(2022,4,23,10,30,0),
    endTime: new Date(2022,4,23,12,30,0),
    img: 'telecom',
     },
     {title:"image processing",
    description: "image processing",
    startTime: new Date(2022,4,24,10,30,0),
    endTime: new Date(2022,4,24,12,30,0),
    img: 'traitementImage',
     }
      
    */];
     showAddEvent:boolean; 
     modes = ['date', 'date-time', 'month', 'month-year', 'time', 'time-date', 'year'];
      selectedMode = 'date'; 
      showPicker = false; 
      dateValue1 = format(new Date(), 'yyyy-MM-dd') + 'T09:00:00.000Z'; 
      dateValue2 = format(new Date(), 'yyyy-MM-dd') + 'T09:00:00.000Z'; 

      formattedString1 = ""; 
      formattedString2 = ""; 

  @ViewChild(CalendarComponent,null) myCall :CalendarComponent
  constructor(public route:Router,public fire:AngularFirestore ,public modalController:ModalController,public NavParams:NavparamService,private datePipe:DatePipe) {
    this.setToday();
    this.showAddEvent=true;
this.getEvents();

  }
 
 ngOnInit(){
  this.allEvents=this.myData;
 }


  onViewTitleChanged(title:string){
    this.currentMonth=title;
  }

  async onEventSelected(ev){
this.newEvent=ev;
this.NavParams.setTitle(this.newEvent.title);
const modal =await this.modalController.create({
  component:EventDetailsPage,
  componentProps:ev
})
return await modal.present();
  }
  back(){
    this.myCall.slidePrev();
  }
  next(){
    this.myCall.slideNext();
  }

  showHideForm(){
    this.showAddEvent=!this.showAddEvent;
    this.newEvent={
      title:'',
      description:'',
      startTime:new Date().toISOString(),
      endTime:new Date().toISOString(),
      img:'',        }
  }

  today(){
    this.calendar.currentDate=new Date();
  }  
  changeMode(mode){
    this.calendar.mode=mode;
  }
  setToday(){
this.formattedString1= format(parseISO(format(new Date(), 'yyyy-MM-dd') + 'T09:00:00.000Z'),'HH:mm,MMM d, yyyy' ) ;
this.formattedString2= format(parseISO(format(new Date(), 'yyyy-MM-dd') + 'T09:00:00.000Z'),'HH:mm,MMM d, yyyy' ) ;
  
}
  dateChanged1(value){
    this.dateValue1=value;
    this.formattedString1= format(parseISO(value) ,'dd/MM/yyyy HH:mm' ) ;

  }
  dateChanged2(value){
    this.dateValue2=value;
    this.formattedString2= format(parseISO(value) ,'dd/MM/yyyy HH:mm' ) ;

  }
  addEvent(){
    this.allEvents.push(
      {
        title:this.newEvent.title,
      description:this.newEvent.description,
      startTime:new Date(this.newEvent.startTime),
      endTime:new Date(this.newEvent.endTime),
      img:this.newEvent.img,
      }
    )
    console.log(this.newEvent.startTime);
    
  }


  getEvents(){
    let date1: any;
    let date2: any;
    let date3: string = "" 
    let date4: string = "" 
    this.fire.collection("event").snapshotChanges().subscribe(
      data => {
        this.event = data.map(
          e => {

            this.newEventSol.title=e.payload.doc.data()["title"];
            this.newEventSol.description=e.payload.doc.data()["description"];
            this.newEventSol.img=e.payload.doc.data()["img"];
date1=new Date(e.payload.doc.data()["startTime"].toDate());
date2=new Date(e.payload.doc.data()["endTime"].toDate());
date3 = this.datePipe.transform(date1, "yyyy-MM-ddThh:mm:ssZZZZZ");
//console.log(date3);
date4=this.datePipe.transform(date2, "yyyy-MM-ddThh:mm:ssZZZZZ");
    this.newEventSol.startTime=date3;
    this.newEventSol.endTime=date4;

    this.myData.push(
      {
        title:this.newEventSol.title,
      description:this.newEventSol.description,
      startTime:new Date(this.newEventSol.startTime),
      endTime:new Date(this.newEventSol.endTime),
      img:this.newEventSol.img,
      }
    )

          }

        )
      }
    )

   /* this.newEventSol.title='hello baby';
    this.newEventSol.description='nnn';
    this.newEventSol.img='linux';*/


    
  }

  Ajouter() {

    this.fire.collection("event").add(
      {
        title:this.newEvent.title,
      description:this.newEvent.description,
      startTime:new Date(this.newEvent.startTime),
      endTime:new Date(this.newEvent.endTime),
      img:this.newEvent.img,
      }
    );
    this.route.navigateByUrl('home');
    
  }
  backToMain(){
    this.route.navigateByUrl('page3');
  }
   
}
