import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
;
import {MatDividerModule} from '@angular/material/divider';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatMenuModule} from '@angular/material/menu';
import {MatListModule} from '@angular/material/list';
import { RouterModule } from '@angular/router';
import {MatSidenavModule} from '@angular/material/sidenav';

import {MatFormFieldModule} from '@angular/material/form-field';
import { AheaderComponent } from './acomponents/aheader/aheader.component';
import { AboutComponent } from './acomponents/about/about.component';
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import { MatStepperModule } from '@angular/material/stepper';




@NgModule({
  declarations: [
    AheaderComponent,    
    AboutComponent

  ],
  imports: [
    CommonModule
    ,MatDividerModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    FlexLayoutModule,
    MatMenuModule,
    MatListModule,
    RouterModule,
    MatSidenavModule,
    MatFormFieldModule,
    MatGridListModule,
    MatCardModule,MatListModule,MatStepperModule,MatFormFieldModule
    
  ],
  exports: [
    AboutComponent,
    AheaderComponent
  ]
})
export class SharedModule { }
