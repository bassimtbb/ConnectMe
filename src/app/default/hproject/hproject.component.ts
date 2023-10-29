import {Component} from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-hproject',
  templateUrl: './hproject.component.html',
  styleUrls: ['./hproject.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class HprojectComponent {
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
      columnDef: 'Total_Bids',
      header: 'Total_Bids',
      cell: (element: projects) => `${element.Total_Bids}`,
    },{
      columnDef: 'Duration',
      header: 'Duration',
      cell: (element: projects) => `${element.Duration}`,
    },
    {
      columnDef: 'Status',
      header: 'Status',
      cell: (element: projects) => `${element.Status}`,
    }

  ];
  dataSource = ELEMENT_DATA;
  displayedColumns = this.columns.map(c => c.columnDef);}

export interface projects {
  Project_Name: string;
  Total_Bids: number;
  Freelancer: string;
  Project_Owner:string;
  Cost: string;
  Duration :string;
  Status: string;
}

const ELEMENT_DATA: projects[] = [
  {
    Project_Name: "connectme",
    Total_Bids: 22,
    Freelancer: "rami toumi",
  Cost: "50$",
  Project_Owner:"Amira Mohamed",
  Duration :"7 Days",
  Status: "Done",
  },
  {
    Project_Name: "connectme",
    Total_Bids: 22,
    Freelancer: "aziz torki",
    Project_Owner:"Mehdi Chebbi",
  Cost: "130$",
  Duration :"13 Days",
  Status: "Done",
  },
  
    ];
