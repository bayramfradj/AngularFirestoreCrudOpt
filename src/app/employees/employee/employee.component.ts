import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Toast, ToastrService } from 'ngx-toastr';
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
        empCode: '',
        fullname: '',
        mobile: '',
        position: ''
      };
  }

  onSubmit()
  {
    this.load = true;
    this.employeeService.Save()
    .then(() => {
        this.resetForm();
        this.load = false;
        this.toastr.success('Submitted successfully', 'Employee Register');
    });

  }

}
