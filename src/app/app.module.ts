import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { AnimalBlockComponent } from "./animal-block/animal-block.component";

@NgModule({
  imports: [BrowserModule, FormsModule, ReactiveFormsModule],
  declarations: [AppComponent, AnimalBlockComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
