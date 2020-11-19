import { Employee } from './../shared/employee';
import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../shared/employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  constructor(public serviceEmp: EmployeeService) { }

  ngOnInit(): void {
  }

  onEdit(e: Employee)
  {
    this.serviceEmp.formData = Object.assign({}, e) ;
  }

  onDelete(e: Employee)
  {
      console.log(e);
  }

}
