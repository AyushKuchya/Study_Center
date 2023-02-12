import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataTransferService } from '../data-transfer.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  userData:any;
  userDetails:any;
  displayedColumns: string[] = ['aadhar_no','name','gender','email','qualification', 'number','address','fee_structure','action'];

  constructor(private http:HttpClient,private router:Router,private dataTransferService: DataTransferService) {
    this.userData=[];
   }

  getUserInfo(){
    this.http.get('https://script.google.com/macros/s/AKfycbwhNQs6CwnU0xJ_3edhu2UwRmyaIHogGS-lthQrI90YBRMzkHW-TuyFic-HYDBL2xPU/exec?action=getUsers').subscribe((data:any)=>{
      this.userData=data;
      console.log("data is here",data);
      console.table(data);
    }) 
  }
  RowSelected(rowData:any){
    this.userDetails = rowData;
    console.log("Row Selected",this.userDetails);
    this.dataTransferService.sendData(this.userDetails);
    this.router.navigate(['booking'])
  }

  ngOnInit(): void {
    this.getUserInfo();  
  }

}
