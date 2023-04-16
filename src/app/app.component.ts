import { Component } from '@angular/core';
import {InstrumentsService} from "./service/instruments.service";
import {Observable} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  loading$: Observable<boolean>;
  error$: Observable<boolean>;

  constructor(private instrumentsService: InstrumentsService) {
    this.loading$ = instrumentsService.loading;
    this.error$ = instrumentsService.error;
  }

}
