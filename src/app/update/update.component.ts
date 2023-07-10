import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit{

  @Input() id! : string 
  @Input() lastname!: string
  @Input() numberphone!: string
  @Input() gender!: boolean
  @Input() address!: string
  ngOnInit(): void {
    
  }
  onchange(){
    console.log(this.id);   
  }
  @Output() myevent = new EventEmitter<any>();
  triggerevent() {
    console.log(this.myevent)
  }
  onClick(){
  console.log(this.address)
  }
  updatedata ?: string 
  @Output() updateenventdata : EventEmitter<string> = new EventEmitter();
  sendupdateData() {
    this.updateenventdata.emit(this.updatedata)
  }

}