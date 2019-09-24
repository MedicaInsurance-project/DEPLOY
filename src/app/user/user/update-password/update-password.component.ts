import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../user-service.service'
import { Subscription } from 'rxjs';
import { DataService } from 'src/app/home/data.service';
import { FormBuilder, Validators, FormArray, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update-password',
  templateUrl: './update-password.component.html',
  styleUrls: ['./update-password.component.css']
})
export class UpdatePasswordComponent implements OnInit {
  updatepass: FormGroup;
  email;

  constructor(private _userService: UserServiceService, private dataService: DataService, private fb: FormBuilder,
    // tslint:disable-next-line:variable-name
    private routes: Router, ) {


    this.subscription = this.dataService.getMessage().subscribe(message => {
      if (message) {
        this.messages.push(message);
        this.email = message.text.email;
      } else {
        // clear messages when empty message received
        this.messages = [];
      }
    });
  }


  messages: any[] = [];
  subscription: Subscription;
  ngOnInit() {

    this.updatepass = this.fb.group({
      password: ['', Validators.required],
      newpassword: ['', Validators.required]
    })
  }

  update() {
    console.log("called");
    this._userService.updatePassword(this.email, this.updatepass.value)
      .subscribe(
        data => {
         
        },
        error => console.error("update error",error)
      );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
