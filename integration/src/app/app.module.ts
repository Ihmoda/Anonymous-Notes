import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { DataService } from './data.service';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ShowListComponent } from './show-list/show-list.component';
import { AddItemComponent } from './add-item/add-item.component';


@NgModule({
  declarations: [
    AppComponent,
    ShowListComponent,
    AddItemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule

  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
