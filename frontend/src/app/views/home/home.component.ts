import { Component, OnInit } from '@angular/core';
import { HeaderService } from 'src/app/components/template/header/header.service';

/**
 * @author atnunes
 * @since 02/07/2020
 * @description CRUD de produtos para aprendizado em Angular
 * 
 */

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private headerService: HeaderService) {
      headerService.headerData = {
        title: 'Início',
        icon: 'home',
        routeUrl: ''
      }

   }

  ngOnInit(): void {
  }

  
}
