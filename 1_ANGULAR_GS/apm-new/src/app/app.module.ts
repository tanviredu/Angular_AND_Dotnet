import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { ConvertToSpacesPipe } from 'src/shared/convert-to-spaces';
import { AppComponent } from './app.component';
import {ProductListComponent} from './product-list/product-list.component'

@NgModule({
  declarations: [AppComponent,ProductListComponent,ConvertToSpacesPipe],
  imports: [BrowserModule,FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
