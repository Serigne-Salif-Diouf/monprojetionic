import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor() {}

  public actionSheetButtons = [
    {
      text: 'Suprimer',
      role: 'destructive',
      data: {
        action: 'suprimer',
      },
    },
    {
      text: 'Partager',
      data: {
        action: 'partager',
      },
    },
    {
      text: 'Annuler',
      role: 'annuler',
      data: {
        action: 'annuler',
      },
    },
  ];


}






