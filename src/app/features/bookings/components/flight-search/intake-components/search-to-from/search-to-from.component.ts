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

  airportData :  any;


  closeButton(){
    this.close.emit(false);
  }

  keyword! : string;

  constructor(private flightService : FlightServiceService){}

    async searchAirports() : Promise<boolean>{
    await this.flightService.getAiportCode(this.keyword).subscribe({
      next: (n : any) => {
        this.airportData = n;
        console.log(n);
        return true;
      },
    })
    return false;
  }  

}
