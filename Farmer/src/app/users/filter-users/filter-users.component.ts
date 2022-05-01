import { Component, Input,EventEmitter, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-filter-users',
  templateUrl: './filter-users.component.html',
  styleUrls: ['./filter-users.component.css']
})
export class FilterUsersComponent implements OnInit {

  @Input() 
  userName:string;

  @Output() 
  UserDetails= new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  submitUsers(){
    console.log('users clicked');
    const obj={'userName':'Pratiksha','Password':"*****"}
     this.UserDetails.emit(obj);

  }

}
