import { Component, OnInit } from '@angular/core';
import { BestsellersService } from 'src/app/services/bestsellers.service';
import { Result } from '../../interfaces/interfaces';//src/app/interfaces/interfaces

@Component({
  selector: 'app-bestsellers',
  templateUrl: './bestsellers.page.html',
  styleUrls: ['./bestsellers.page.scss'],
})
export class BestsellersPage implements OnInit {//OnInit crea el objeto o página cuando ejecuto el servidor

  bestsellers: Result [] = [];

  constructor(private bestsellersService: BestsellersService) { }

  ngOnInit() {
    this.bestsellersService.getTopHardcover().subscribe(resp=>{
      console.log('bestsellers',resp);
    this.bestsellers.push(...resp.results);
  });
  }

}
