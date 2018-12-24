import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { EquipmentDetailsContainerComponent } from "./equipmentDetailsContainer/equipmentDetailsContainer.component";

const routes: Routes = [
  {
    component: EquipmentDetailsContainerComponent,
    path: ""
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
