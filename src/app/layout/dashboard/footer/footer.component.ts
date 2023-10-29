import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  ok=true
  @Output() open= new EventEmitter();
  toggle(){
    this.open.emit();
  this.ok=!this.ok;
  }
}
