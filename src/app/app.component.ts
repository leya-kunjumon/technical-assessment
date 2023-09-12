import { Component, OnInit } from '@angular/core';
import { FormBuilder,Validators,FormGroup  } from '@angular/forms';
import { Router } from '@angular/router';
import { DataServicesService } from './services/data-services.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'technical-assessment';
  validationOutKey =""
  submitted = false;
  constructor(private formBuilder:FormBuilder,
    private router:Router,public DataServicesService: DataServicesService,) { }

    loginForm : FormGroup = this.formBuilder.group({
      username :[null,[Validators.required,Validators.pattern('/^[A-z0-9!@#$%^&*+=-_().]*$/')]],
      password :[null,[Validators.required,Validators.pattern('/^[A-z0-9!@#$%^&*+=-_().]*$/')]],
  })
  
  get f(){
    return this.loginForm.controls;
  }
  
  // function for showing validation message for required field in login form
  validationDisplay(msg:any){
    if(msg == 'required'){
      this.validationOutKey = 'This field is required.'
     }else{
      this.validationOutKey = 'Invalid Pattern'
     }
     return this.validationOutKey;
  }
  
  // function for submit login form
  doLogin(){
    this.submitted = true;
    var data = {
      "username" : this.loginForm?.value?.username,
      "password" : this.loginForm?.value?.password,
      "device_id" : 'fgdg'
    }
    this.DataServicesService.signIn(data).subscribe((res: any) => {
    })
  
  }
}
