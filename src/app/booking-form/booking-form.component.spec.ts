import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { of } from 'rxjs';

import { BookingFormComponent } from './booking-form.component';
import { DataTransferService } from '../data-transfer.service';

class DataTransferServiceStub {
  getData() {
    return of({
      name: 'Alice',
      email: 'alice@example.com',
      aadhar_no: '123412341234',
      number: '9999999999',
      address: 'Main St',
      gender: 'Female',
      qualification: 'Graduate',
      fee_structure: 'Monthly'
    });
  }
}

describe('BookingFormComponent', () => {
  let component: BookingFormComponent;
  let fixture: ComponentFixture<BookingFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookingFormComponent ],
      imports: [ReactiveFormsModule],
      providers: [{ provide: DataTransferService, useClass: DataTransferServiceStub }]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookingFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize date fields as empty values', () => {
    expect(component.userForm.get('start_date')?.value).toBeNull();
    expect(component.userForm.get('end_date')?.value).toBeNull();
  });

  it('should include Seat-6 option', () => {
    expect(component.Seats.find((seat) => seat.value === '6')?.viewValue).toBe('Seat-6');
  });
});
