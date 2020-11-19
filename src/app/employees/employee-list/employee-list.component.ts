import { Employee } from './../shared/employee';
import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../shared/employee.service';
import {  ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  constructor(public serviceEmp: EmployeeService , private toastr: ToastrService) { }

  ngOnInit(): void {
  }

  onEdit(e: Employee)
  {
    this.serviceEmp.formData = Object.assign({}, e) ;
  }

  onDelete(e: Employee)
  {
      if (confirm("are you sure ?"))
      {
        this.serviceEmp.delete(e.id).then(() => {
          this.serviceEmp.loadData();
          this.toastr.warning('Submitted successfully', 'Employee Register',{ 'progressBar' : true});
      });
      }
  }

}
