import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { SharedModule } from 'src/app/shared/shared.module';
import { ActivatedRoute } from '@angular/router';
import { RickAndMortyService } from 'src/app/services/rick-and-morty.service';

@Component({
  selector: 'app-episodes-detail',
  templateUrl: './episodes-detail.page.html',
  styleUrls: ['./episodes-detail.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule,SharedModule]
})
export class EpisodesDetailPage implements OnInit {

  episodeId: string = '';
  episode = null as any;

  constructor(
    private actRoute: ActivatedRoute,
    private rickAndMortySvc: RickAndMortyService  // Inyecta el servicio en el constructor

  ) {
    this.episodeId = this.actRoute.snapshot.paramMap.get('id') as string
    console.log(this.episodeId);

   }

  ngOnInit() {
  }

  ionViewWillEnter(){
    this.getEpisode();
  }
  //obtener episodios
  getEpisode(){
    this.rickAndMortySvc.getEpisodesById(this.episodeId).subscribe({
      next:(res: any)=>{
        console.log(res);
        this.episode = res;
        this.getEpisode()
      },
      error:(error: any)=>{
        console.log(error);
      }

    })


  }

  // getEpisodes(){
  //   for(let url of this.episo.episode){

  //       this.rickAndMortySvc.getEpisodesById(url).subscribe({

  //       })


  //   }

  // }







}
