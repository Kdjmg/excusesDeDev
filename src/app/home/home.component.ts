import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  citations:any ;
  excuse = "";
  id = 0;

  constructor(
    private services: ApiService,
    private activatedRoute: ActivatedRoute
     ) 
     
        { 
          this.citations = this.services.getCitations();
          // cherche l'id renseigner dans l'url
          // this.id = this.activatedRoute.snapshot.params['id'];

          // appelle la fonction avec l'iD récupérer
          this.citationRandom(this.id);
        
        }

  ngOnInit(): void {
    
    
    

  
}
citationRandom(id=-1){
  // Si l'id n'est pas défini, fait un random, sinon chercher la phrase coresspondant a l'id demander dans l'url.
  if(id == undefined || id==-1){
    const random = Math.floor(Math.random() * (this.citations.length -1))
    this.excuse = this.citations[random].excuse;
  }
  else{
    this.excuse = this.citations[id].excuse;
  }
 
 
}
    
}
