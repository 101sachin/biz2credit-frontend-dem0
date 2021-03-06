import { Component, OnInit } from "@angular/core";
import { CustomersDataService } from "./services/customers-data.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "biz2credit-ng";
  customers: any;

  constructor(private service: CustomersDataService) {}

  ngOnInit() {
    this.service.getCustomers().subscribe(values => {
      console.log(values);
      this.customers = values;
    });
  }
}
