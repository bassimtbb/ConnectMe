import {COMMA, ENTER} from '@angular/cdk/keycodes';
import {Component} from '@angular/core';
import {MatChipEditedEvent, MatChipInputEvent} from '@angular/material/chips';
export interface skill {
  name: string;
}
export interface Profile {
  username: string;
  title: string;
  name: string;
  lastname: string;
  email: string;
  openP: number;
  Tprojet: number;
  bio: string;
  statut: string;
  origine:string;
  skills: skill[];
  cost:number;
}
@Component({
  selector: 'app-profile-c',
  templateUrl: './profile-c.component.html',
  styleUrls: ['./profile-c.component.scss']
})
export class ProfileCComponent {
  addOnBlur = true;
  readonly separatorKeysCodes = [ENTER, COMMA] as const;
  profile: Profile={username: "bessem_tb",   title: "software engineer",   name: "Bessem",   lastname: "Tabbeb", origine:"Tunisian",  email: "Bassim.tabbeb@gmail.com",   openP: 2,   Tprojet:20,   bio: "Hello, my name is Bassim Tabbeb, and I am a software engineer with 5 years of experience in the field. I am passionate about developing high-quality software that meets the needs of users while also being efficient and reliable.Throughout my career, I have gained expertise in a variety of programming languages, including Arabic Italian francais English. I have also worked on a wide range of software projects, from developing mobile applications to building complex web-based systems. One of my strengths as a software engineer is my ability to work well within a team. I enjoy collaborating with other developers, designers, and stakeholders to ensure that software projects are delivered on time and to the highest possible standard. In addition to my technical skills, I am a strong communicator and problem-solver. I am always looking for ways to improve my skills and stay up-to-date with the latest developments in the field. Thank you for considering my application. I am excited about the opportunity to bring my expertise to your team as a software engineer.",   statut: "Online",   skills: [{name:"Angular"},{name:"PHP"},{name:"JS"},{name:"AWS"},],   cost:50, };

  step = 0;

  setStep(index: number) {
    this.step = index;
  }

  nextStep() {
    this.step++;
  }

  prevStep() {
    this.step--;
  }
  
  add(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();

    // Add our skill
    if (value) {
      this.profile.skills.push({name: value});
    }

    // Clear the input value
    event.chipInput!.clear();
  }

  remove(skill: skill): void {
    const index = this.profile.skills.indexOf(skill);

    if (index >= 0) {
      this.profile.skills.splice(index, 1);
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
    const index = this.profile.skills.indexOf(skill);
    if (index >= 0) {
      this.profile.skills[index].name = value;
    }
  }
}
