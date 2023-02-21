import { Component, OnInit } from '@angular/core';
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

  constructor(private dataTransferService: DataTransferService) {
    this.dataTransferService.getData().subscribe(data => {
      this.userData = data;
      console.log("------------------",data);
    });
    

  }
  Seats=[
    {value: '1', viewValue: 'Seat-1'},
    {value: '2', viewValue: 'Seat-2'},
    {value: '3', viewValue: 'Seat-3'},
    {value: '4', viewValue: 'Seat-4'},
    {value: '5', viewValue: 'Seat-5'},
    {value: '6', viewValue: 'Seat-5'},
    {value: '7', viewValue: 'Seat-7'},
    {value: '8', viewValue: 'Seat-8'},
    {value: '9', viewValue: 'Seat-9'},
    {value: '10', viewValue: 'Seat-10'},
    {value: '11', viewValue: 'Seat-11'},
    {value: '12', viewValue: 'Seat-12'},
  ];


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
      start_date:new FormControl(Date,Validators.required),
      end_date:new FormControl(Date,Validators.required),
      seat_no:new FormControl(null,Validators.required),
      payment_status: new FormControl(null,Validators.required)
    })
  }
  onSubmit(){
    // let date =this.userForm.value.start_date.toLocaleDateString()
    // this.userForm.value.start_date = date 
    // console.log(this.userForm.value.start_date);
    
    console.log(this.userForm.value);
    alert("Form Submitted Successfully!!");
    this.userForm.reset()  
  }

}
