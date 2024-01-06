
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RickAndMortyService } from 'src/app/services/rick-and-morty.service';
import { SharedModule } from 'src/app/shared/shared.module';
 
@Component({
  selector: 'app-home',
  templateUrl: './home2.page.html',
  styleUrls: ['./home2.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule,SharedModule]
})
export class Home2Page implements OnInit {
  characters: any[] = [];
  episodes: any[] = [];
  params = {} as any;

  constructor(
    private rickAndMortySvc: RickAndMortyService
  ) { }

  ngOnInit() {
    this.params.page = 0;
    //this.getCharacters();
    this.getEpisodes()
  }

  //obtener episodios
  getEpisodes(event?: any){
    this.params.page +=1;
    this.rickAndMortySvc.getEpisodes(this.params).subscribe({
      next:(res: any)=>{

      this.episodes.push(...res.results);
      console.log(this.episodes);
        if(event) event.target.complete();
      },
      error:(error: any)=>{
        if(event) event.target.complete();
      }
    }

    )

    
  }

   // Buscar episodios
   searchEpisodes(){
    this.params.page =1;
    this.rickAndMortySvc.getEpisodes(this.params).subscribe({
      next:(res: any)=>{


        this.episodes = res.results
 
        
      },
      error:(error: any)=>{
     
      }
    }

    )

    
  }


}
