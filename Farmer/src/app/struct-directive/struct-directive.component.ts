import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-struct-directive',
  templateUrl: './struct-directive.component.html',
  styleUrls: ['./struct-directive.component.css']
})
export class StructDirectiveComponent implements OnInit {

  biodata:any=[
    {id:1,name:"Pratiksha"},
    {id:2,name:"Subhash"},
    {id:3,name:"Dhumal"}
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
