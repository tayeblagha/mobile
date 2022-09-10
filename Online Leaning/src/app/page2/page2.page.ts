import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page2',
  templateUrl: './page2.page.html',
  styleUrls: ['./page2.page.scss'],
})
export class Page2Page implements OnInit {
  testTabs:boolean=true;

  vid: any = [];
  vidMath: any = null;
  vidLinux: any = null;
  vidEnglish: any = null;
  vidIonic: any = null;
  vidJava: any = null;

  eng: String = "eng";
  holdon: String = "";
  searchTerm: String;
mathCounter:any=0;
linuxCounter:any=0;
englishCounter:any=0;
ionicCounter:any=0;
javaCounter:any=0;

  constructor(private route:Router,private fire: AngularFirestore) { }

  ngOnInit() {
  }

  startVidMath() {
    if (this.vidMath == null) {
      this.vidMath = [];
      this.fire.collection("videos", ref => ref.where('type', '==', 'math')).snapshotChanges().subscribe(
        data => {
          this.vidMath = data.map(
            e => {

              return {
                type: e.payload.doc.data()["type"],
                url: e.payload.doc.data()["url"],
                title: e.payload.doc.data()["title"]
              }

            }

          )
        }
      )
    }
    else { this.vidMath = null; }
  }


  startVidEnglish() {
    if (this.vidEnglish == null) {
      this.vidEnglish = [];
      this.fire.collection("videos", ref => ref.where('type', '==', 'english')).snapshotChanges().subscribe(
        data => {
          this.vidEnglish = data.map(
            e => {

              return {
                type: e.payload.doc.data()["type"],
                url: e.payload.doc.data()["url"],
                title: e.payload.doc.data()["title"]
              }

            }

          )
        }
      )
    }
    else { this.vidEnglish = null; }
  }

  startVidJava() {
    if (this.vidJava == null) {
      this.vidJava = [];
      this.fire.collection("videos", ref => ref.where('type', '==', 'java')).snapshotChanges().subscribe(
        data => {
          this.vidJava = data.map(
            e => {

              return {
                type: e.payload.doc.data()["type"],
                url: e.payload.doc.data()["url"],
                title: e.payload.doc.data()["title"]
              }

            }

          )
        }
      )
    }
    else { this.vidJava = null; }
  }

  startVidIonic() {
    if (this.vidIonic == null) {
      this.vidIonic = [];
      this.fire.collection("videos", ref => ref.where('type', '==', 'ionic')).snapshotChanges().subscribe(
        data => {
          this.vidIonic = data.map(
            e => {
this.vidIonic.type=e.payload.doc.data()["type"];
              return {
                type: e.payload.doc.data()["type"],
                url: e.payload.doc.data()["url"],
                title: e.payload.doc.data()["title"]
              }

            }

          )
        }
      )
    }
    else { this.vidIonic = null; }
    console.log(this.vidIonic);
  }

  startVidLinux() {
    if (this.vidLinux == null) {
      this.vidLinux = [];
      this.fire.collection("videos", ref => ref.where('type', '==', 'linux')).snapshotChanges().subscribe(
        data => {
          this.vidLinux = data.map(
            e => {
              return {
                type: e.payload.doc.data()["type"],
                url: e.payload.doc.data()["url"],
                title: e.payload.doc.data()["title"]
              }

            }

          )
        }
      )
    }
    else { this.vidLinux = null; }
  }

  search(q: string) {

    this.fire.collection("videos").snapshotChanges().subscribe(
      data => {
        this.vid = data.map(
          e => {

            return {
              type: e.payload.doc.data()["type"],
              url: e.payload.doc.data()["url"],
              title: e.payload.doc.data()["title"]
            }

          }

        )
      }
    )
    this.searchTerm = q;
    console.log(q);
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
}
