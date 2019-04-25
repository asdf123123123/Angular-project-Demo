import { EmployeeService } from "src/app/shared/employee.service";
import { Component, OnInit } from "@angular/core";
import { Employee } from "src/app/shared/employee.model";
import { ToastrService } from "ngx-toastr";

@Component({
  selector: "app-employee-list",
  templateUrl: "./employee-list.component.html",
  styleUrls: ["./employee-list.component.css"]
})
export class EmployeeListComponent implements OnInit {
  constructor(
    private service: EmployeeService,
    private toastr: ToastrService
  ) {}

  ngOnInit() {
    this.service.refreshList();
  }

  populateForm(emp: Employee) {
    this.service.formData = Object.assign({}, emp);
  }

  deleteRecord(id: number) {
    if (confirm("Are you sure to delete this record?"))
      this.service.deleteEmployee(id).subscribe(res => {
        this.toastr.info("Delete Successfully", "EMP. Register");
        this.service.refreshList();
      });
  }
}
