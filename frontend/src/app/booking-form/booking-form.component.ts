import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormControl, FormGroup , Validators } from '@angular/forms';
import { DataTransferService } from '../data-transfer.service';

@Component({
  selector: 'app-booking-form',
  templateUrl: './booking-form.component.html',
  styleUrls: ['./booking-form.component.css']
})
export class BookingFormComponent implements OnInit {
  userData:any;
  userForm:FormGroup;
  paymentStatus =[{value:'completed',viewValue:'Completed'},
                  {value:'pending',viewValue:'Pending'}]
  Seats =[]

  constructor(private dataTransferService: DataTransferService,private http:HttpClient) {
    this.dataTransferService.getData().subscribe(data => {
      this.userData = data;
      console.log("------------------",data);
    });
    this.getSeatInfo();

  }
  getSeatInfo(){
    this.http.get('http://localhost:3000/seatinformation').subscribe((data:any)=>{
      this.Seats=data.data;
      console.log(this.Seats);
      
    }) 
  }
  


  ngOnInit(): void { 
    this.userForm = new FormGroup({
      name: new FormControl(this.userData.name, Validators.required),
      email: new FormControl(this.userData.email,[Validators.required,Validators.email]),
      aadhar_no: new FormControl(this.userData.aadhar_no,Validators.required),
      mobile_no: new FormControl(this.userData.number,Validators.required),
      address: new FormControl(this.userData.address,Validators.required),
      gender: new FormControl(this.userData.gender,Validators.required),
      qualification:new FormControl(this.userData.qualification,Validators.required),
      fee_structure:new FormControl(this.userData.fee_structure,Validators.required),
      start_date:new FormControl(this.userData.start_date,Validators.required),
      end_date:new FormControl(this.userData.end_date,Validators.required),
      seat_no:new FormControl(this.userData.seat_no,Validators.required),
      payment_status: new FormControl(this.userData.status,Validators.required)
    })
  }
  onSubmit(){

    let body ={
      "seat_no":this.userForm.value.seat_no,
      //"seat_no":'g',
      "aadhar": this.userForm.value.aadhar_no,
      "name":this.userForm.value.name,
      "email":this.userForm.value.email,
      "address":this.userForm.value.address,
      "fee_structure":this.userForm.value.fee_structure,
      "qualification":this.userForm.value.qualification,
      "status":this.userForm.value.payment_status,
      "mobile_no":this.userForm.value.mobile_no,
      "start_date":this.userForm.value.start_date.toJSON(),
      "end_date":this.userForm.value.end_date.toJSON(),
      "gender":this.userForm.value.gender
    }
    if(this.userForm.value.start_date < this.userForm.value.end_date){
      this.http.post('http://localhost:3000/userdetails',body).subscribe(
        (data: any[]) => {
          console.log('api call ha been made',data);
          alert("Form Submitted Successfully!!");
          this.userForm.reset() 
      },
      (error) =>{
        console.log(error);
        alert('Something went wrong!!! Please try again')
      }
      )
  
    }
    else{
      alert('Please select correct Date!!! end date cannot be smaller than start date')
    }


 
  
    
    // console.log(this.userForm.value);
    // console.log((this.userForm.value.start_date.toJSON()));
    // console.log(this.userForm.value.end_date.toJSON());
  }

}
