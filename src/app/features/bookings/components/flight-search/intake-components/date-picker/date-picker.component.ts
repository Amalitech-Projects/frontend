import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
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

  

  ngAfterViewInit() {
    // Assuming you have a library that handles date range picker functionality
    // Replace this with your actual date range picker library initialization code
    $(this.daterangeInput.nativeElement).daterangepicker({
      opens: 'left'
    }, (start: any, end: any, label: any) => {
      console.log("A new date selection was made: " + start.format('YYYY-MM-DD') + ' to ' + end.format('YYYY-MM-DD'));
    });
  }

}
