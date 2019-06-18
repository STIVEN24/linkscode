import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

// services
import { GameService } from '../../services/game.service';
// 

// jwt-decode
import * as jwt_decode from 'jwt-decode';
// 

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  tokenVerify = "";

  constructor(
    private activatedRoute: ActivatedRoute,
    private gameService: GameService,
    private location: Location
  ) { }

  tokenGame: any = "";

  ngOnInit() {
    this.tokenVerify = this.activatedRoute.snapshot.queryParams.tokenValidate;

    this.gameService.verifyToken({ "token": this.tokenVerify }).subscribe(
      res => {
        const token = this.activatedRoute.snapshot.queryParams.token;
        this.tokenGame = jwt_decode(token);
      },
      err => {
        this.tokenVerify = "";
        alert("Token invalido, Vuelve a la página del juego para poder ver los links, Gracias");
        window.location.assign('https://gamescode.herokuapp.com');
      }
    );

  }


}
