import {COMMA, ENTER} from '@angular/cdk/keycodes';
import {Component} from '@angular/core';
import {MatChipEditedEvent, MatChipInputEvent} from '@angular/material/chips';
export interface skill {
  name: string;
}
@Component({
  selector: 'app-poster-p',
  templateUrl: './poster-p.component.html',
  styleUrls: ['./poster-p.component.scss']

})

export class PosterPComponent {

  addOnBlur = true;
  readonly separatorKeysCodes = [ENTER, COMMA] as const;
  skills: skill[] = [];

  add(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();

    // Add our skill
    if (value) {
      this.skills.push({name: value});
    }

    // Clear the input value
    event.chipInput!.clear();
  }

  remove(skill: skill): void {
    const index = this.skills.indexOf(skill);

    if (index >= 0) {
      this.skills.splice(index, 1);
    }
  }

  edit(skill: skill, event: MatChipEditedEvent) {
    const value = event.value.trim();

    // Remove skill if it no longer has a name
    if (!value) {
      this.remove(skill);
      return;
    }

    // Edit existing skill
    const index = this.skills.indexOf(skill);
    if (index >= 0) {
      this.skills[index].name = value;
    }
  }
  

}
