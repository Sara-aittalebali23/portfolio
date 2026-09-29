import { Component } from '@angular/core';
import {NgxTypewriterComponent} from "@omnedia/ngx-typewriter";
@Component({
  selector: 'app-profile-component',
  standalone: true,
  imports: [NgxTypewriterComponent],
  templateUrl: './profile-component.html',
  styleUrl: './profile-component.css',
})
export class ProfileComponent {
  wordsToType: string[] = [
    'SARA AIT TALEB ALI',
    'Full Stack Developer',
    'Frontend Developer',
    'Backend Developer',
    'Database Administrator',
  ];

}
