import { Component } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';

@Component({
  selector: 'app-layout',
  imports: [MatToolbarModule, MatTabsModule, MatSidenavModule],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss'
})
export class HomeComponent {

}
