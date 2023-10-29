import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatTableModule} from '@angular/material/table';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { AcceuilComponent } from './layout/acceuil/acceuil.component';
import { SharedModule } from "./layout/acceuil/acceuil.module";
import { LoginComponent } from './layout/connexion/login/login.component';
import { SignupComponent } from './layout/connexion/signup/signup.component';
import { ForgetpComponent } from './layout/connexion/forgetp/forgetp.component';
import { DashboardComponent } from './layout/dashboard/dashboard.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import { NavbarComponent } from './layout/dashboard/navbar/navbar.component';
import { HeaderdComponent } from './layout/dashboard/headerd/headerd.component';
import {MatListModule} from '@angular/material/list';
import {MatSidenavModule} from '@angular/material/sidenav';
import { FooterComponent } from './layout/dashboard/footer/footer.component';
import { MatStepperModule } from '@angular/material/stepper';
import { MatFormFieldModule } from '@angular/material/form-field';
import { PosterPComponent } from './default/poster-p/poster-p.component';
import { MyprojectsComponent } from './default/myprojects/myprojects.component';
import {MatRadioModule} from '@angular/material/radio';
import {MatSelectModule} from '@angular/material/select';
import {MatChipsModule} from '@angular/material/chips';
import {MatExpansionModule} from '@angular/material/expansion';
import { BoardComponent } from './default/board/board.component';
import {MatCardModule} from '@angular/material/card';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatTabsModule} from '@angular/material/tabs';
import { NgxPaginationModule } from 'ngx-pagination';
import { HttpClientModule } from '@angular/common/http';
import {MatInputModule} from '@angular/material/input';
import { HistoryComponent } from './default/history/history.component';
import { HPayComponent } from './default/h-pay/h-pay.component';
import { HprojectComponent } from './default/hproject/hproject.component';
import { AskhelpComponent } from './default/askhelp/askhelp.component';
import { RecherchepComponent } from './default/recherchep/recherchep.component';
import { BoardFComponent } from './default/board-f/board-f.component';
import { MyprojectsFComponent } from './default/myprojects-f/myprojects-f.component';
import { ProfileCComponent } from './default/profile-c/profile-c.component';
import {MatPaginatorModule} from '@angular/material/paginator';

import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

@NgModule({
    declarations: [
        AppComponent,
        AcceuilComponent,
        LoginComponent,
        SignupComponent,
        ForgetpComponent,
        DashboardComponent,
        NavbarComponent,
        HeaderdComponent,
        FooterComponent,
        PosterPComponent,
        MyprojectsComponent,
        BoardComponent,
        HistoryComponent,
        HPayComponent,
        HprojectComponent,
        AskhelpComponent,
        RecherchepComponent,
        BoardFComponent,
        MyprojectsFComponent,
        ProfileCComponent,

    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        MatSidenavModule,
        MatDividerModule,
        MatIconModule,
        MatMenuModule,
        MatToolbarModule,
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MatButtonModule,
        SharedModule,
        MatListModule,
        MatStepperModule,
        MatFormFieldModule,
        MatRadioModule,
        MatSelectModule,
        MatChipsModule,
        MatExpansionModule,
        MatTableModule,
        MatCardModule,
        DragDropModule,
        MatInputModule,
        MatButtonToggleModule,
        MatTableModule,
        MatTabsModule,
        NgxPaginationModule,
        HttpClientModule,
        MatPaginatorModule,
        MatProgressSpinnerModule
    ]
})
export class AppModule { }
