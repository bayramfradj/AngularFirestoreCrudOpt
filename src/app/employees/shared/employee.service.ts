import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Employee } from './employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  formData: Employee;
  constructor(private firestore: AngularFirestore) { }
  Save()
  {
      return this.firestore.collection('employees').add(this.formData);
  }
}
