import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tracks-page',
  templateUrl: './tracks-page.component.html',
  styleUrls: ['./tracks-page.component.css']
})
export class TracksPageComponent implements OnInit {

  mockTracksList = [
    {
      name: 'BEBE (Oficial)'
    },
    {
      name: 'BEBE (Oficial)'
    },
    {
      name: 'BEBE (Oficial)'
    },

  ]

  constructor() { }

  ngOnInit(): void {
  }

}
