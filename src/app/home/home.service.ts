import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'

@Injectable()
export class FlickrService {

  key = '974a30b4a04073fa41a6a93758f30220';
  search = 'dog';
  perpage = 500;

  flickrAPI = `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${this.key}&tags=${this.search}&privacy_filter=1&safe_search=1&extras=url_m%2Cowner_name%2Cdescription%2Ctags&per_page=${this.perpage}&format=json&nojsoncallback=1`;

  constructor(public http: HttpClient){}

  getImages(): Observable<any> {
    return this.http.get(this.flickrAPI);
  }
}
