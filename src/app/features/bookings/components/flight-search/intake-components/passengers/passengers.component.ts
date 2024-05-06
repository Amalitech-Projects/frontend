import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';

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

  closeButton(){
    this.close.emit(false);
  }
}
