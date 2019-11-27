import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { CustomersDataService } from "./services/customers-data.service";
import { HttpClientModule } from "@angular/common/http";
import { CustomerComponent } from './components/customer/customer.component';

@NgModule({
  declarations: [AppComponent, CustomerComponent],
  imports: [BrowserModule, HttpClientModule],
  providers: [CustomersDataService],
  bootstrap: [AppComponent]
})
export class AppModule {}
