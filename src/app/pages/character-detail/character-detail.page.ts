import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { RickAndMortyService } from 'src/app/services/rick-and-morty.service';


@Component({
  selector: 'app-character-detail',
  templateUrl: './character-detail.page.html',
  styleUrls: ['./character-detail.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, SharedModule]
})
export class CharacterDetailPage implements OnInit {

  characterId: string ='';
  character = null as any;
 // rickAndMortySvc: any;
  episodes: any[]=[];

  constructor(
    private actRoute: ActivatedRoute,
    private rickAndMortySvc: RickAndMortyService  // Inyecta el servicio en el constructor

  ) { 
    this.characterId = this.actRoute.snapshot.paramMap.get('id') as string
    console.log(this.characterId);

  }

  ngOnInit() {
  }

  ionViewWillEnter(){
     this.getCharacter();
  }

  // Obtener personajes
  getCharacter( ){
    
    this.rickAndMortySvc.getCharactersById(this.characterId).subscribe({
      next:(res: any)=>{

        //console.log(res);
        this.character = res;
        this.getEpisodes()
      },
      error:(error: any)=>{
        console.log(error);
      }
    });
  }

  getEpisodes(){

    for(let url of this.character.episode){

      this.rickAndMortySvc.getCharactersById(url).subscribe({

        next: (res: any) => {
         // console.log(res);
         // this.character = res;
         this.episodes.push(res);
        },
        error: (error: any)=>{
  
        }
        
  
  
      });
    }
  

    }

   

}
