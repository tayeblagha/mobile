import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NavparamService {
  title:any;
  description:any;
  stratDate:any;
  endDate:any;
  image:any;
  navData:any;
  element:any;
  constructor() {

   }
   setNavData(navObject){
this.navData=navObject;
   }
   getNavData(){
     if(this.navData==null)
     return false;
     else
     return this.navData;
  }
  setElement(navObject){
    this.element=navObject;
       }
       getElement(){
         if(this.element==null)
         return 'nothingFound';
         else
         return this.element;
      }
      setTitle(navObject){
        this.title=navObject;
           }

           getTitle(){
             if(this.title==null)
             return 'nothingFound';
             else
             return this.title;
          }

         

          setdescription(navObject){
            this.description=navObject;
               }
    
               getdescription(){
                 if(this.description==null)
                 return 'nothingFound';
                 else
                 return this.description;
              }
              setStartTime(navObject){
                this.stratDate=navObject;
                   }
        
                   getStartTime(){
                     if(this.stratDate==null)
                     return 'nothingFound';
                     else
                     return this.stratDate;
                  }
                  setEndTime(navObject){
                    this.endDate=navObject;
                       }
            
                       getEndTime(){
                         if(this.endDate==null)
                         return 'nothingFound';
                         else
                         return this.endDate;
                      }
                      setImage(navObject){
                        this.image=navObject;
                           }
                
                           getImage(){
                             if(this.image==null)
                             return 'nothingFound';
                             else
                             return this.image;
                          }
  
}
