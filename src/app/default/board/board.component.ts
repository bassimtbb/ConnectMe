import {Component} from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';

export interface Comment {
  id: number;
  text: string;
  author: string;
  authorT: string;
  date: Date;
}
@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})




export class BoardComponent {

comment: Comment[] = [];
 i:number=1;

  addItem(newItem: string) {
    this.comment.push({id: this.i++,text: newItem,authorT:"Owner",author: "Bessem Tabbeb",date:  new Date()});
  }


  todo = ['Consulter contenu public',  'Se connecter', 'Se déconnecter'];

  done = ['Gérer profil par le client', 'Gérer profil par le freelance', 'Gérer compte par lutilisateur', 'Gérer compte administratif par administrateur', 'Gérer les utilisateurs par ladministrateur'];

  inprogress = ['Créer un compte'];

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
  }
}











