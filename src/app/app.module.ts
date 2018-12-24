import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { EquipmentDetailsContainerComponent } from "./equipmentDetailsContainer/equipmentDetailsContainer.component";
import { BoxComponent } from "./equipmentDetailsContainer/components/box/box.component";
import { BoxControlComponent } from "./equipmentDetailsContainer/components/box/box-control/box-control.component";

@NgModule({
  declarations: [
    AppComponent,
    EquipmentDetailsContainerComponent,
    BoxComponent,
    BoxControlComponent
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [BoxComponent]
})
export class AppModule {}
