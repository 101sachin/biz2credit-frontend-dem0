import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class CustomersDataService {
  apiUrl = "http://localhost:3000/api/";
  constructor(private http: HttpClient) {}

  getCustomers() {
    return this.http.get(this.apiUrl + "customers");
  }
}
