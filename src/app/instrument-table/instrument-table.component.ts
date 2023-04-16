import {Component, OnInit} from "@angular/core";
import {InstrumentsService} from "../service/instruments.service";
import {take} from "rxjs";
import {MatDialog} from "@angular/material/dialog";
import {InstrumentDetailsComponent} from "./instrument-details/instrument-details.component";
import {Instrument} from "../model";

@Component({
  selector: 'app-instrument-table',
  templateUrl: './instrument-table.component.html',
  styleUrls: ['./instrument-table.component.css']
})
export class InstrumentTableComponent implements  OnInit {
  dataSource: Instrument[] = [];

  constructor(private instrumentsService: InstrumentsService,
              private dialog: MatDialog) {
  }

  ngOnInit(): void {
    this.instrumentsService.getInstruments().pipe(take(1)).subscribe(
      result => {
        this.dataSource = result.sort((a,b) => a.fundName.localeCompare(b.fundName));
      }
    )
  }

  showDetails(instrument: Instrument) {
      this.dialog.open(InstrumentDetailsComponent, { data: {instrument}});
  }

}
