import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { FlightServiceService } from '../../../../../../services/core/flight-service/flight-service.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-search-to-from',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './search-to-from.component.html',
  styleUrl: './search-to-from.component.css'
})
export class SearchToFromComponent {
  @ViewChild('inputField')
  inputField!: ElementRef;

  @Input() placeholder! : string;
  
  @Output() close = new EventEmitter<boolean>();

  @Output() airport = new EventEmitter<Array<any>>();

  airportData : Array<any> = [];


  closeButton(){
    this.close.emit(false);
  }

  keyword : string =  "";
  loading = false;
  empty : boolean = true;

  constructor(private flightService : FlightServiceService){}

        searchAirports(){
          // Loader
          this.loading = true;
          this.empty = false;

          if(this.keyword.length == 0){
            this.airportData = [];
            this.loading = false;
            this.empty = true;
          }

          // API Request
          this.flightService.getAiportCode({
            keyword: this.keyword
          }).subscribe({
            next: (n : any) => {
              this.airportData = n;
              console.log(n);
              this.loading = false;
          },
          error: (e) => {
            this.isEmpty(); 
          }
        })
      }  

      emitDataToInput(airport : Array<any>){
        this.airport.emit(airport);
        console.log(airport); 
      }


      clearData(){
        this.keyword = "";
        this.airport.emit(undefined)
        this.closeButton();
      }

  isEmpty(): boolean {
    return this.airportData.length <= 0  && this.loading === false;
  }

  
}
