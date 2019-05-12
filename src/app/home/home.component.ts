import { Component, OnInit } from '@angular/core'
import { FlickrService } from './home.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})

export class HomeComponent implements OnInit {

  photo: any[]
  search: string
  perpage: number

  constructor(public flickrService: FlickrService) { }

  ngOnInit() {

    this.flickrService.getImages()
      .subscribe((res: any) => this.photo = res['photos'].photo)
  }
}
