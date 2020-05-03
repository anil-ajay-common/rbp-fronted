import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BackendAppSettings } from '../backend.settings';
import { Observable } from 'rxjs';
import { IStateResponse } from '../model/state.model';

@Injectable({
  providedIn: 'root'
})
export class StateDaoService {

  constructor(private http: HttpClient) { }

  getAllStates(): Observable<IStateResponse> {
    const url = BackendAppSettings.endpoint.getAllStates.getUrl();
    return this.http.get<IStateResponse>(url);
  }

}
