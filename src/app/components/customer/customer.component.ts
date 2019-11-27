import { Component, OnInit } from "@angular/core";
import { CustomersDataService } from "src/app/services/customers-data.service";

@Component({
  selector: "biz-customer",
  templateUrl: "./customer.component.html",
  styleUrls: ["./customer.component.css"]
})
export class CustomerComponent implements OnInit {
  customers: any;
  constructor(private service: CustomersDataService) {}
  ngOnInit() {
    this.service.getCustomers().subscribe(values => {
      console.log(values);
      this.customers = values;
    });
  }
}
