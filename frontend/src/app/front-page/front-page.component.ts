import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LoginComponent } from '../login/login.component';
@Component({
  selector: 'app-front-page',
  templateUrl: './front-page.component.html',
  styleUrls: ['./front-page.component.css']
})
export class FrontPageComponent implements OnInit {

  constructor(private dialogRef:MatDialog) { }

  openAdminLogin(){
    this.dialogRef.open(LoginComponent);
  }
  ngOnInit(): void {
  }

}
