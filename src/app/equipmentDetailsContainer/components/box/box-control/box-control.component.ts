import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-box-control",
  templateUrl: "./box-control.component.html",
  styleUrls: ["./box-control.component.scss"]
})
export class BoxControlComponent implements OnInit {
  @Input() control;
  constructor() {}

  ngOnInit() {
    console.log(this.control);
  }
}
