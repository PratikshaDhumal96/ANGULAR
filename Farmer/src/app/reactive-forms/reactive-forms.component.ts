import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.css']
})
export class ReactiveFormsComponent implements OnInit {
  
  ngOnInit(): void {
  }

  checkoutForm:FormGroup;

  constructor(private formBuilder:FormBuilder) {
    this.checkoutForm=this.formBuilder.group({
      emailAdd:new FormControl(),
      quant:new FormControl(),
      checkBox:new FormControl()
     });

   }

   checkoutFormData(){
     console.log(this.checkoutForm);
   }

 

}
