import { Component, OnInit } from '@angular/core';
import { TrackModel } from '@core/models/tracks.model';
import { SearchService } from '@modules/history/services/search.service';

@Component({
  selector: 'app-history-page',
  templateUrl: './history-page.component.html',
  styleUrls: ['./history-page.component.css']
})
export class HistoryPageComponent implements OnInit {
  listResults: TrackModel[] = []
  constructor(private searchService: SearchService) { }

  ngOnInit(): void {
  }

  receiveData(event: string): void {
    console.log('🎁 Estoy en el padre jua jau ...', event)
    this.searchService.searchTracks$(event)
      .subscribe(({ data }) => {
        this.listResults = data
      })
  }

}
