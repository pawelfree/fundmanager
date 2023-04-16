import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { BehaviorSubject, catchError, delay, finalize, map, Observable, of, switchMap } from "rxjs";
import { Instrument, ServerResponse } from "../model";

@Injectable({
  providedIn: 'root'
})
export class InstrumentsService {

  private instrumentsUrl = 'https://ivarpivar.netlify.app/api';
  private isLoading = new BehaviorSubject<boolean>(false);
  private isError = new BehaviorSubject<boolean>(false);

  constructor(private http: HttpClient) { }

  get error() {
    return this.isError.asObservable();
  }

  get loading() {
    return this.isLoading.asObservable().pipe(
      switchMap(isLoading => {
        if (!isLoading) {
          return of(false);
        }
        return of(true).pipe(delay(500));
      })
    );
  }

  getInstruments(): Observable<Instrument[]> {
    this.isLoading.next(true);
    return this.http.get<ServerResponse>(this.instrumentsUrl).pipe(
      map(result => {
        if (Array.isArray(result) && result[0].status.success) {
          return result[0].data
        }
        throw new Error('Error status from server');
      }),
      finalize(() => this.isLoading.next(false)),
      catchError((error: HttpErrorResponse) => {
        this.isError.next(true);
        throw new Error(error.message || 'An error occurred.');
      })
    );
  }
}
