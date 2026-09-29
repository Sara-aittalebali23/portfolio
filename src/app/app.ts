import { Component, ElementRef, signal, ViewChild } from '@angular/core';
import { NavbarComponent } from './components/navbar-component/navbar-component';
import { ProfileComponent } from './components/profile-component/profile-component';
import { AboutSectionComponent } from './components/about-section-component/about-section-component';
import { SkillsSectionComponent } from './components/skills-section-component/skills-section-component';
import { ProjectSectionComponent } from './components/project-section-component/project-section-component';
import { CertificatsSectionComponent } from './components/certificats-section-component/certificats-section-component';
import { ContactMeSectionComponent } from './components/contact-me-section-component/contact-me-section-component';
import { FooterComponent } from './components/footer-component/footer-component';

@Component({
  selector: 'app-root',
  imports: [NavbarComponent , ProfileComponent,
        AboutSectionComponent,SkillsSectionComponent,
        ProjectSectionComponent,CertificatsSectionComponent,
        ContactMeSectionComponent , FooterComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Portfolio');

  @ViewChild('about-container') aboutSection!: ElementRef;

  scrollToNext() {
    this.aboutSection.nativeElement.scrollIntoView({
      behavior: 'smooth'
    });
  }
  

}
