import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component, inject, OnInit } from '@angular/core';
import { BreakpointObserver ,LayoutModule} from '@angular/cdk/layout';
import { Observable } from 'rxjs/internal/Observable';
import { map } from 'rxjs/internal/operators/map';

@Component({
  selector: 'app-navbar-component',
  imports: [CommonModule,LayoutModule],
  templateUrl: './navbar-component.html',
  styleUrl: './navbar-component.css',
})
export class NavbarComponent {
  IsOn = false;
  classname=""; 
  
  private breakpointObserver = inject(BreakpointObserver);
  
  screenWidth700$: Observable<boolean> = this.breakpointObserver
    .observe('(max-width: 700px)')
    .pipe(map(result => result.matches));
    
  screenWidth500$: Observable<boolean> = this.breakpointObserver
    .observe('(max-width: 600px)')
    .pipe(map(result => result.matches));

    toggleMenu()
    {

      this.IsOn = !this.IsOn;
      if(this.IsOn)
      {
        this.classname="nav-menu-mobile";
        console.log(this.classname);
      }
      else{
        this.classname="";
        console.log(this.classname);
      }
      console.log(this.IsOn);
    }
}
