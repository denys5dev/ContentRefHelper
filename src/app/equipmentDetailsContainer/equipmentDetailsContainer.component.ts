import {
  Component,
  OnInit,
  ViewEncapsulation,
  ViewChild,
  ViewContainerRef,
  ComponentFactoryResolver,
  AfterContentInit,
  ComponentRef
} from "@angular/core";
import { DETAILS } from "../mocks/equipmentDetails.moks";
import { BoxComponent } from "./components/box/box.component";

@Component({
  selector: "app-equipmentDetailsContainer",
  templateUrl: "./equipmentDetailsContainer.component.html",
  styleUrls: ["./equipmentDetailsContainer.component.scss"],
  encapsulation: ViewEncapsulation.None
})
export class EquipmentDetailsContainerComponent
  implements OnInit, AfterContentInit {
  @ViewChild("entry", { read: ViewContainerRef }) entry: ViewContainerRef;
  details: any;
  boxComponentFactory: any;
  component: ComponentRef<BoxComponent>;
  constructor(private resolver: ComponentFactoryResolver) {}

  ngOnInit() {
    this.details = DETAILS;
  }

  ngAfterContentInit() {
    this.boxComponentFactory = this.resolver.resolveComponentFactory(
      BoxComponent
    );

    this.componentBoxBuilder(this.details);
  }

  componentBoxBuilder(details) {
    Object.entries(details).forEach(([key, value]) => {
      this.component = this.entry.createComponent(this.boxComponentFactory);
      this.component.instance.header = this.craftHeaders(key);
      this.component.instance.control = value;
    });
  }

  craftHeaders(key) {
    return key.replace(/([a-z](?=[A-Z]))/g, "$1 ");
  }
}
