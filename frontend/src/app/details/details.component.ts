import { Component, OnInit } from '@angular/core';
import { DataTransferService } from '../data-transfer.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  userData:any;
  inactiveUserData:any;
  seatAvailable:any;
  userDetails:any;
  displayedColumns: string[] = ['aadhar_no','seat_no','name','gender','email', 'number','address','fee_structure','end_date','paymentstatus','action'];


  constructor(private http:HttpClient,private dataTransferService: DataTransferService,private router:Router) { 
    this.userData=[];
  }

  RowSelected(rowData:any){
    this.userDetails = rowData;
    console.log("Row Selected",this.userDetails);
    this.dataTransferService.sendData(this.userDetails);
    this.router.navigate(['booking'])
  }
  getDate(date:string){
    return date.split('T')[0];
  }
  getUserInfo(){
    this.http.get('http://localhost:3000/activeusers').subscribe((data:any)=>{
      this.userData=data.data;
      console.log("data is here",data);
      console.table(data);
    }) 
  }
  getInactiveUserInfo(){
    this.http.get('http://localhost:3000/inactiveusers').subscribe((data:any)=>{
      this.inactiveUserData=data.data;
      console.log("Inactive userdata is here",this.inactiveUserData);
    })
  }
  getSeatNo(){
    this.http.get('http://localhost:3000/seatinformation').subscribe((data:any)=>{
      this.seatAvailable=data.result;
      console.log("Total Seats",this.seatAvailable);
    })
  }

  ngOnInit(): void {
    this.getUserInfo()
    this.getInactiveUserInfo()
    this.getSeatNo()
  }

}
