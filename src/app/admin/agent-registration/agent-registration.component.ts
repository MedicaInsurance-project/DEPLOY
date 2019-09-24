import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormArray, FormGroup } from '@angular/forms';
import { AuthService } from 'src/app/home/auth.service';

@Component({
  selector: 'app-agent-registration',
  templateUrl: './agent-registration.component.html',
  styleUrls: ['./agent-registration.component.css']
})
export class AgentRegistrationComponent implements OnInit {

  registerForm: FormGroup;
  
  constructor( private fb : FormBuilder, private _authService: AuthService) { }

  ngOnInit() {

    this.registerForm = this.fb.group({
      first_name: ['', Validators.required],
      last_name: ['', Validators.required],
      phone: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required]
  })

}

  onSubmit(){
    this._authService.registerAgent(this.registerForm.value)
    .subscribe(
      res => console.log(res),
      err => console.log(err)
     )
    
    
  }


}
