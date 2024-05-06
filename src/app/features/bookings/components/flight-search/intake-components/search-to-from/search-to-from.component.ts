import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-search-to-from',
  standalone: true,
  imports: [],
  templateUrl: './search-to-from.component.html',
  styleUrl: './search-to-from.component.css'
})
export class SearchToFromComponent {
  @ViewChild('inputField')
  inputField!: ElementRef;

  @Input() placeholder! : string;
  
  @Output() close = new EventEmitter<boolean>();

  closeButton(){
    this.close.emit(false);
  }

}
