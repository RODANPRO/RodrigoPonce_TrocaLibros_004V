import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RespuestaToHardcover } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class BestsellersService {

  constructor(private http: HttpClient) { }

  getTopHardcover()
  {
    // eslint-disable-next-line max-len
    return this.http.get<RespuestaToHardcover>
    ('https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=e2MymBXVuRsR03lsetXHdNAIDrmCgHkU');
  }
}
