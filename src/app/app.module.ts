import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ContainerComponent } from './components/container/container.component';
import { MenuSelectComponent } from './components/menu-select/menu-select.component';
import { DetailMenuComponent } from './components/detail-menu/detail-menu.component';
import { OrdersComponent } from './components/orders/orders.component';
import { TotalComponent } from './components/total/total.component';

@NgModule({
  declarations: [
    AppComponent,
    ContainerComponent,
    MenuSelectComponent,
    DetailMenuComponent,
    OrdersComponent,
    TotalComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
