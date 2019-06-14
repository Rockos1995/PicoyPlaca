import { Component, OnInit, Input } from '@angular/core';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {  
  plateNumber : any = "";
  date : String = "";
  dateHour : String = "";
  constructor() { 
    
  }

  ngOnInit() {
  }

  /**
   * This method validate the number plate car
   */
  validate(){
    let lastDigit = this.plateNumber.substring(this.plateNumber.length-1,this.plateNumber.length);
    console.log(lastDigit);
    console.log(this.plateNumber);
    console.log(this.date);
    console.log(this.dateHour);



  }

  /**
   * Validate date pattern
   */
  validateDate(date){
    var pattern = `/^\d{1,2}\/\d{1,2}\/\d{2,4}$/`;
    return  ((date.match(pattern)) && (date!=''));
  }

}
