import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ServicesComponent } from './components/services/services.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { ContactComponent } from './components/contact/contact.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { ScrollTopComponent } from './components/scroll-top/scroll-top.component';
import { ProjectDetailComponent } from './project-detail/project-detail.component';
import { WebDesignerBhusawalComponent } from './web-designer-bhusawal/web-designer-bhusawal.component';
import { WebDesignerPuneComponent } from './web-designer-pune/web-designer-pune.component';
import { StudioBannerComponent } from './components/studio-banner/studio-banner.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ServicesComponent,
    PortfolioComponent,
    ContactComponent,
    NavbarComponent,
    FooterComponent,
    ScrollTopComponent,
    ProjectDetailComponent,
    WebDesignerBhusawalComponent,
    WebDesignerPuneComponent,
    StudioBannerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
