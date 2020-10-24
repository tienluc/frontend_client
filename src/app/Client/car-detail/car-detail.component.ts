import { Component, OnInit } from '@angular/core';
import { BsDatepickerConfig} from 'ngx-bootstrap/datepicker';
@Component({
  selector: 'app-car-detail',
  templateUrl: './car-detail.component.html',
  styleUrls: ['./car-detail.component.css']
})
export class CarDetailComponent implements OnInit {
 
   
  

  datePickerConfig : Partial<BsDatepickerConfig>;

  minDate: Date;
  minDate2: Date;
 

  GKH: Date = new Date();
  GKT: Date = new Date();
  
  constructor() { 
    this.datePickerConfig = Object.assign({},
      {
        containerClass: 'theme-blue',
        showWeekNumbers:false,
        dateInputFormat: 'DD/MM/YYYY'
    });
    this.minDate = new Date();
    this.minDate.setDate(this.minDate.getDate());

    this.minDate2 = new Date();
    this.minDate2.setDate(this.minDate2.getDate());

  }
  

  ngOnInit(): void {
  }

}
