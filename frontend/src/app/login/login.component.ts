import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

   public loginForm!:FormGroup
  constructor(private fb:FormBuilder,private router:Router,private dialogRef:MatDialog) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      username:['',Validators.required],
      password:['',Validators.required]
    })
  }
  login(){
    if(this.loginForm.value.username == 'admin' && this.loginForm.value.password == 'admin'){
      this.dialogRef.closeAll()
      this.router.navigate(['dashboard'])
    }
    else{
      alert('Invalid Credentials')
      this.loginForm.reset()
    }

  }

}
