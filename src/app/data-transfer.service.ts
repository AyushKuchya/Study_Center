import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataTransferService {
  private dataSource = new BehaviorSubject<any>({});
//{
//   "time": "",
//   "name": "",
//   "gender": "",
//   "address": "",
//   "number": null,
//   "qualification": "",
//   "email": "",
//   "aadharlink": "",
//   "aadhar_no": null,
//   "fee_structure": ""
// }

  constructor() { }
  sendData(data: any) {
    this.dataSource.next(data);
  }
  getData(): Observable<any>{
    return this.dataSource.asObservable();
  }
}
