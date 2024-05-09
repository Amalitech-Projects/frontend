import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { Traveler } from '../../../../../../services/constants/types/data.types';

@Component({
  selector: 'app-passengers',
  standalone: true,
  imports: [],
  templateUrl: './passengers.component.html',
  styleUrl: './passengers.component.css'
})
export class PassengersComponent {

  @ViewChild('inputField')
  inputField!: ElementRef;

  @Input() placeholder! : string;
  
  @Output() close = new EventEmitter<boolean>();
  @Output() passengers = new EventEmitter<any[]>();

travelersRecord: Record<string, Traveler[]> = {
  "ADULT": [
    {
      id: "1",
      travelerType: "ADULT",
      fareOptions: ['STANDARD']
    }
  ]
}

  closeButton(){
    this.close.emit(false);
  }


  travelers : Traveler[] = [
    {
      id: "1",
      travelerType: "ADULT",
      fareOptions: ['STANDARD']
    }
  ];

  totalPassengers(){
    this.passengers.emit(this.getAllTravelers());
  }

   

addTraveler(key: string) {
  const newTraveler: Traveler = {
    id: (this.getTotalArrayLength() + 1).toString(),
    travelerType: key.toUpperCase(),
    fareOptions: ['STANDARD']
  }
  if(!this.travelersRecord[key]) {
    this.travelersRecord[key] = [newTraveler]
  }else{
    this.travelersRecord[key].push(newTraveler)
  }

  this.totalPassengers()
}

removeTraveler(key: string) {
  if(key ==="ADULT" && this.travelersRecord[key].length === 1) return;
  this.travelersRecord[key] && this.travelersRecord[key.toUpperCase()].pop()
  this.totalPassengers();
}

getTotalArrayLength(): number {
  return Object.values(this.travelersRecord).reduce((totalLength, array) => totalLength + array.length, 0);
}

getTravelerLength(key: string) {
  this.travelersRecord[key.toUpperCase()].length;
}

getAllTravelers(): Traveler[] {
  return Object.values(this.travelersRecord).flatMap(array => array);
}
    
}
