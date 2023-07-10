import { Component, OnInit, Output, EventEmitter, Input} from '@angular/core';
import { UserService } from './user.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'api';
  data:any=[];
  gender?: string;

  constructor(
    private userService : UserService
  ){
     this.emitEvent()
  }
  ngOnInit(): void {}

  emitEvent() {
    this.userService.getdata().subscribe({
      next:(value)=> {
        this.data = value
        console.log(value)
      },
    })
  }
  //sự kiện output 
  currentItem :any
  handleClick(item:any) {
    this.currentItem = item
    console.log(this.currentItem)
  }
  eventdata : any
  handleevent(event:any) {
    this.eventdata = event;
    console.log(this.eventdata)
  }
}


// tạo 1 table có data từ mockapi 
// table gồm họ và tên , giới tính (male/female), địa chỉ ,số điện thoại
// update thông tin cá nhân sang bên phải