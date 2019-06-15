import { Component, OnInit, Input } from '@angular/core';
import {RestrictionsCarRoad} from './models/RestrictionsCarRoad';
import {HomeService} from './home.service';
import {GrowlService} from 'ngx-growl';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {  
  restrictionTime1:string= "07:00:00-09:29:59";
  restrictionTime2: string ="16:00:00-19:29:59";
  plateNumber : any = "";
  restrictionValues : RestrictionsCarRoad = new RestrictionsCarRoad();
  date : String = "";
  dateHour : String = "";
  response : RestrictionsCarRoad;
  constructor(    private homeService:HomeService,private growlService: GrowlService) { 
  
  }

  ngOnInit() {
  }

  /**
   * This method validate the number plate car
   */
  validate(){
    if(this.date!="" && this.dateHour!="" && this.plateNumber!=""){
    let lastDigit = this.plateNumber.substring(this.plateNumber.length-1,this.plateNumber.length);
    this.homeService.getValidation(lastDigit,this.date).then(res=>{
      this.response= res;
      if(this.response.restriction == "1"){
          let initRestriction  = this.getDatesRestrictions(this.date,this.restrictionTime1,true);
          let finalRestriction  =  this.getDatesRestrictions(this.date,this.restrictionTime1,false);

          let initRestriction2  = this.getDatesRestrictions(this.date,this.restrictionTime2,true);
          let finalRestriction2  =  this.getDatesRestrictions(this.date,this.restrictionTime2,false);
          let dateComplex = new Date( `${this.date} ${this.dateHour}`);
          if(dateComplex >= initRestriction && dateComplex <= finalRestriction ){
            if(dateComplex >= initRestriction && dateComplex <= finalRestriction ){
              this.growlService.addError(`You are in Pico Placa Restriction in the morning`);
            }
          }else if(dateComplex >= initRestriction2 && dateComplex <= finalRestriction2 ){
            this.growlService.addError(`You are in Pico Placa Restriction in the afternoon`);
          }else{
            this.growlService.addSuccess(`You don't find in Pico Placa Restriction `);
          }
      }else{
        this.growlService.addSuccess(`You don't find in Pico Placa Restriction `);
      }
    });
  }else{
    this.growlService.addWarn(`Please, fill in the data `);
  }
  }

  getDatesRestrictions(date,hours,isFirst){
     return isFirst?new Date(`${date} ${hours.split("-")[0]}`):new Date(`${date} ${hours.split("-")[1]}`);
  }

 

  /**
   * Validate date pattern
   */
  validateDate(date){
    var pattern = `/^\d{1,2}\/\d{1,2}\/\d{2,4}$/`;
    return  ((date.match(pattern)) && (date!=''));
  }

}
