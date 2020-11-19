import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Employee } from './employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  formData: Employee;
  list: Employee[];
  options: string[] = ["AA", "AB", "AC"];
  constructor(private firestore: AngularFirestore) {
    this.loadData();
  }

  loadData()
  {
    this.firestore.collection('employees').snapshotChanges().subscribe(actionArray => {
      this.list = actionArray.map(item => {
        const data = item.payload.doc.data() as Employee;
        const id = item.payload.doc.id;
        return { id, ...data };
      });
    });

  }
  Save()
  {
     let data = Object.assign({}, this.formData);
     delete data.id;
     return this.firestore.collection('employees').add(data);
  }

  update()
  {
    let data = Object.assign({}, this.formData);
    delete data.id;
    return this.firestore.doc('employees/' + this.formData.id).update(data);
  }

  delete(id: string)
  {
    return this.firestore.doc('employees/'+id).delete();
  }

}
