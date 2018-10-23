import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ContainerComponent } from './components/container/container.component';
import { MenuSelectComponent } from './components/menu-select/menu-select.component';
import { DetailMenuComponent } from './components/detail-menu/detail-menu.component';
import { OrdersComponent } from './components/orders/orders.component';
import { TotalComponent } from './components/total/total.component';
import { environment } from 'src/environments/environment.prod';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule, AngularFirestore } from '@angular/fire/firestore';
import {FormsModule} from '@angular/forms';

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
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFirestoreModule.enablePersistence(),
    FormsModule
  ],
  providers: [AngularFirestore],
  bootstrap: [AppComponent]
})
export class AppModule { }
