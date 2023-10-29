import {Component} from '@angular/core';

export interface projects {
  Project_Name: string;
  Total_Bids: number;
  Budget: string;
  skills: string;
  Bid_End_Date :string;
  description:string;
}

const ELEMENT_DATA: projects[] = [
  {
    Project_Name: "connectme",
    Total_Bids: 22,
    skills: "PHP - WordPress - MangoDB -Bootstrap - HTML  ",  
    Budget: "12-50",
    Bid_End_Date :"7 Days",
    description: `I am seeking a talented graphic designer to create a unique custom look for a project. I have an established design language in mind and working within these guidelines. This project has a budget of between $1,000 and $2,500 and requires someone with a creative eye, technical skills and the ability to bring projects to life within budget and timeline constraints. Personality and a good work ethic are also very important to this project. Applicants should have experience in graphic design, branding, logo design and web design. Please submit any relevant portfolio pieces along with your application.`,
  },
  {
    Project_Name: "etudnet",
    Total_Bids: 12,
    skills: "Laravel - JS - MySQL - Angular - AWS - NodeJS  ",  
    Budget: "21-70",
    Bid_End_Date :"14 Days",
    description: `
    I am looking for a skilled graphic designer to craft a distinct and bespoke appearance for a project. I have a pre-existing design aesthetic in mind, and it is imperative that the designer adhere to these directives. The project's budget ranges from $1,000 to $2,500, and I am seeking someone with imaginative vision, proficient technical abilities, and the capacity to complete tasks within budget and time constraints. Additionally, personality and a strong work ethic are highly valued qualities for this undertaking. Candidates must possess experience in graphic design, branding, logo design, and web design. Please include relevant samples from your portfolio when submitting your application.`,
  },
  
    ];

@Component({
  selector: 'app-recherchep',
  templateUrl: './recherchep.component.html',
  styleUrls: ['./recherchep.component.scss']
})
export class RecherchepComponent   {

  dataSource = ELEMENT_DATA;

}