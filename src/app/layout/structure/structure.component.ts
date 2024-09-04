import { Component, NgModule } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SidebarComponent } from "../../shared/sidebar/sidebar.component";
import { NavbarComponent } from '../../shared/navbar/navbar.component';
import { FotterComponent } from '../../shared/fotter/fotter.component';
import { MobileNavComponent } from "../../shared/mobile-nav/mobile-nav.component";
import { CommonModule } from '@angular/common';
import { ToggleServeService } from '../../services/toggle-serve.service';
@Component({
  selector: 'app-structure',
  standalone: true,
  imports: [NavbarComponent, FotterComponent, RouterOutlet, SidebarComponent, MobileNavComponent, CommonModule],
  templateUrl: './structure.component.html',
  styleUrl: './structure.component.css'
})
export class StructureComponent {

  constructor(private hideservice: ToggleServeService) { }

  toggleSidebar() {
    this.hideservice.togglefunc();
  }
}


