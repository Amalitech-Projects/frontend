import { AfterViewInit, Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TravelDateTime } from '../../../../../../services/constants/types/data.types';
declare var $: any; // Import jQuery

@Component({
  selector: 'app-date-picker',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './date-picker.component.html',
  styleUrl: './date-picker.component.css'
})
export class DatePickerComponent implements AfterViewInit{

  @ViewChild('daterangeInput') daterangeInput!: ElementRef;

  constructor() { }

  @Output() interval = new EventEmitter<TravelDateTime>();
  
  travelDT! : TravelDateTime;

  ngAfterViewInit() {
    $(this.daterangeInput.nativeElement).daterangepicker({
      opens: 'left'
    }, (start: any, end: any, label: any) => {
      this.travelDT = {
        start: start.format('YYYY-MM-DD') ,
        end: end.format('YYYY-MM-DD') 
      }
      this.interval.emit(this.travelDT);
    });
  }

}
