import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {  ToastrService } from 'ngx-toastr';
import { EmployeeService } from '../shared/employee.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  load: boolean;
  
  constructor(public employeeService: EmployeeService, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.resetForm();
    this.load = false;
  }

  resetForm(form?: NgForm)
  {
      if (form != null)
      {
        form.resetForm();
      }
      this.employeeService.formData = {
        id: null,
        empCode: 'AA',
        fullname: '',
        mobile: '',
        position: ''
      };
  }

  onSubmit()
  {
    this.load = true;
    if (this.employeeService.formData.id == null)
    {
      this.employeeService.Save()
      .then(() => {
          this.load = false;
          this.toastr.success('Submitted successfully', 'Employee Register',{ 'progressBar' : true});
      });
    }
    else
    {
      this.employeeService.update().then(() => {
        this.load = false;
        this.toastr.success('Updated successfully', 'Employee Register',{'progressBar': true});
        this.employeeService.loadData();
    });
    }
    this.resetForm();
  }

 

}
