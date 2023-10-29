import {Component} from '@angular/core';

@Component({
  selector: 'app-h-pay',
  templateUrl: './h-pay.component.html',
  styleUrls: ['./h-pay.component.scss'],

})

export class HPayComponent {
  columns = [

    {
      columnDef: 'Project_Name',
      header: 'Project_Name',
      cell: (element: projects) => `${element.Project_Name}`,
    },
    {
      columnDef: 'Project_Owner',
      header: 'Project_Owner',
      cell: (element: projects) => `${element.Project_Owner}`,
    },
    {
      columnDef: 'Freelancer',
      header: 'Freelancer',
      cell: (element: projects) => `${element.Freelancer}`,
    },
    {
      columnDef: 'Cost',
      header: 'Cost',
      cell: (element: projects) => `${element.Cost}`,
    },    {
      columnDef: 'Payment_Date',
      header: 'Payment_Date',
      cell: (element: projects) => `${element.Payment_Date}`,
    },{
      columnDef: 'Duration',
      header: 'Duration',
      cell: (element: projects) => `${element.Duration}`,
    },
    {
      columnDef: 'Methode',
      header: 'Methode',
      cell: (element: projects) => `${element.Methode}`,
    }

  ];
  dataSource = ELEMENT_DATA;
  displayedColumns = this.columns.map(c => c.columnDef);
}

export interface projects {
  Project_Name: string;
  Freelancer: String;
  Cost: string;
  Duration:string;
  Project_Owner:string;
  Payment_Date: string;
  Methode :string;
}

const ELEMENT_DATA: projects[] = [
  {
    Project_Name: "connectme",
    Freelancer: "rami toumi",
    Cost: "50$",
    Duration :"7 Days",
    Project_Owner:"Amira Mohamed",
    Payment_Date:"11/02/2023",
    Methode:"Paypal"
  },  {
    Project_Name: "connectme",
    Freelancer: "Aziz torki",
    Cost: "150$",
    Duration :"17 Days",
    Project_Owner:"Mehdi Chebbi",

    Payment_Date:"11/05/2022",
    Methode:"MasterCard"
  },
  ];




