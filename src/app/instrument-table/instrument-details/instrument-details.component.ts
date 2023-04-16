import { Component, Inject } from "@angular/core";
import { MAT_DIALOG_DATA } from "@angular/material/dialog";
import {Instrument} from "../../model";

@Component({
  selector: 'app-instrument-documents',
  templateUrl: './instrument-details.component.html',
  styleUrls: ['./instrument-details.component.css']
})
export class InstrumentDetailsComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: {instrument: Instrument}) {
  }

  protected readonly window = window;
}
