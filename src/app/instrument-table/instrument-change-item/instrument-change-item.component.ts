import {Component, Input} from "@angular/core";

@Component({
  selector: 'app-instrument-change',
  templateUrl: './instrument-change-item.component.html',
  styleUrls: ['./instrument-change-item.component.css']

})
export class InstrumentChangeItemComponent {
  @Input() change: number | undefined;
}
