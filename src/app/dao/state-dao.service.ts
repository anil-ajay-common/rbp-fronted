import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BackendAppSettings } from '../backend.settings';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StateDaoService {

  constructor(private http: HttpClient) { }

  getAllStates(): Observable<any[]> {
    const url = BackendAppSettings.endpoint.getAllStates.getUrl();
    return this.http.get<any[]>(url);
  }

}
