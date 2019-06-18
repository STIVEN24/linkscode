import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  url_api = "https://gamescodebackend.herokuapp.com/api/games/";

  constructor(
    private httpClient: HttpClient
  ) { }

  verifyToken(verifyToken: any) {
    return this.httpClient.post(`${this.url_api}verifyToken`, verifyToken);
  }

}
