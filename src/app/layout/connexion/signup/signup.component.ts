import { Component } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {
     tog:boolean=true;
   toggel(): void{
 
    this.tog=!this.tog;

   }
}

