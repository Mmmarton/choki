import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChocolateListComponent } from './chocolate-list/chocolate-list.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { uiReducer } from './ui.reducer';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ChocolateListComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    StoreModule.forRoot({ ui: uiReducer })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
