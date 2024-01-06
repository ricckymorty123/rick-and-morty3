import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { __param } from 'tslib';

@Injectable({
  providedIn: 'root'
})
export class RickAndMortyService {

  constructor(private http: HttpClient) { }
  
  getCharacters(params: any){
    return this.http.get(environment.baseUrl + environment.character,{params})
  }

  getCharactersById(id: string){
    return this.http.get(environment.baseUrl + environment.character + id)
  }

  getByUrl(url: string){
    return this.http.get(url)
  }

getEpisodes(params: any){

  return this.http.get(environment.baseUrl + environment.episode,{params})
}

getEpisodesById(id: string){
  return this.http.get(environment.baseUrl + environment.episode + id)
}
 
}
