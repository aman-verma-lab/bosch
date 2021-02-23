import { Component, PipeTransform } from '@angular/core';
import CARDSDATA  from '../../services/card';


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})

export class CardComponent{
  finalData:any = '';
  
  constructor() { 
    this.finalData = CARDSDATA;
  }

}
